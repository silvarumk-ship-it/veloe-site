import { list, put } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";
import type { Registration } from "./types";

const BLOB_PATH = "registrations.json";
const BLOB_STORE_ID = process.env.BLOB_STORE_ID!;
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN!;
const LOCAL_DATA_FILE = path.join(process.cwd(), "data", "registrations.json");

function isVercelEnv(): boolean {
  return Boolean(process.env.VERCEL);
}

function shouldUseBlobStorage(): boolean {
  return Boolean(isVercelEnv() && BLOB_STORE_ID && BLOB_TOKEN);
}

async function ensureLocalDataFile(): Promise<void> {
  await fs.mkdir(path.dirname(LOCAL_DATA_FILE), { recursive: true });
  try {
    await fs.access(LOCAL_DATA_FILE);
  } catch {
    await fs.writeFile(LOCAL_DATA_FILE, "[]", "utf-8");
  }
}

async function readFromBlob(): Promise<Registration[]> {
  try {
    const { blobs } = await list({
      prefix: BLOB_PATH,
      storeId: BLOB_STORE_ID,
      token: BLOB_TOKEN
    });

    const blob = blobs.find(b => b.pathname === BLOB_PATH);
    if (!blob) return [];

    const res = await fetch(blob.url, {
      headers: { Authorization: `Bearer ${BLOB_TOKEN}` },
      cache: "no-store",
      next: { revalidate: 0 }
    });

    if (!res.ok) throw new Error(`Erro ao ler: ${res.status}`);
    return await res.json() as Registration[];
  } catch (err) {
    console.error("Erro lendo do Blob:", err);
    return [];
  }
}

async function readFromLocal(): Promise<Registration[]> {
  await ensureLocalDataFile();
  const raw = await fs.readFile(LOCAL_DATA_FILE, "utf8");
  return raw.trim() ? JSON.parse(raw) : [];
}

async function writeToBlob(registrations: Registration[]): Promise<void> {
  await put(BLOB_PATH, JSON.stringify(registrations, null, 2), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    storeId: BLOB_STORE_ID,
    token: BLOB_TOKEN
  });
}

async function writeToLocal(registrations: Registration[]): Promise<void> {
  await ensureLocalDataFile();
  await fs.writeFile(LOCAL_DATA_FILE, JSON.stringify(registrations, null, 2), "utf8");
}

async function readRegistrations(): Promise<Registration[]> {
  return shouldUseBlobStorage() ? readFromBlob() : readFromLocal();
}

async function writeRegistrations(registrations: Registration[]): Promise<void> {
  if (shouldUseBlobStorage()) await writeToBlob(registrations);
  else await writeToLocal(registrations);
}

export async function getRegistrations(): Promise<Registration[]> {
  return readRegistrations();
}

export async function saveRegistration(reg: Registration): Promise<Registration> {
  const all = await readRegistrations();
  const idx = all.findIndex(i => i.id === reg.id);
  idx >= 0 ? all[idx] = reg : all.unshift(reg);
  await writeRegistrations(all);
  return reg;
}

export async function deleteRegistration(id: string): Promise<boolean> {
  const all = await readRegistrations();
  const filtered = all.filter(i => i.id !== id);
  if (filtered.length === all.length) return false;
  await writeRegistrations(filtered);
  return true;
}

export async function getRegistrationById(id: string): Promise<Registration | null> {
  const all = await readRegistrations();
  return all.find(i => i.id === id) ?? null;
}