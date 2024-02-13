import { VercelRequest, VercelResponse } from '@vercel/node';

let visitCount = 0;

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (req.method === 'POST') {
    visitCount++;
    res.status(200).json({ visitCount });
  } else {
    res.status(405).end();
  }
}
