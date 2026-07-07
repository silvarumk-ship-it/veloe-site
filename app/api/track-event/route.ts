import { NextResponse } from 'next/server';

const FB_PIXEL_ID = process.env.FB_PIXEL_ID || '1402511185031681';
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN || 'EAAIDzzA8qGQBR5ZCdFc2WVMhaiTX61JZAkOtSUk6ZCM335Yf7yYBoDl21xpH6StFh0LUvvs3wK1vw3TqHMrlTkuYvRQwooGodGGeCncbk2ymam9QBniZC5AE1VAFSZCYpKGXCalciZAkpUE8skOA61i8VQgzm60hP2UG10nzJAE2ILyJUZBTnFKkiyXPgYfvIyutgZDZD';

export async function POST(request: Request) {
  const body = await request.json();

  const eventData = {
    data: [
      {
        event_name: body.eventName || 'CompleteRegistration',
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: body.url || '',
        action_source: 'website',
        user_data: body.userData || {}
      }
    ]
  };

  try {
    const res = await fetch(`https://graph.facebook.com/v22.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });

    const result = await res.json();
    return NextResponse.json({ success: true, result });
  } catch (err) {
    return NextResponse.json({ success: false, error: err });
  }
}