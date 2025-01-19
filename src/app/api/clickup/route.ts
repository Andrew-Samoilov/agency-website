import { NextRequest, NextResponse } from 'next/server';

const CLICKUP_API_URL = 'https://api.clickup.com/api/v2';
const TOKEN = process.env.CLICKUP_API_TOKEN;
const LIST_ID = '901200419809'; // ID списку, в якому створюються задачі
const PARENT = '8697jpz8z'; // ID батьківської задачі

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, description } = body; 

        const res = await fetch(`${CLICKUP_API_URL}/list/${LIST_ID}/task`, {
            method: 'POST',
            headers: {
                'Authorization': TOKEN!,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                description,
                parent: PARENT,
            }),
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`ClickUp API error: ${res.status} ${errorText}`);
        }

        const data = await res.json();
        return NextResponse.json({ message: 'Message send!', data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
