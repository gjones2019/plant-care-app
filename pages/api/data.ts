import type { NextApiRequest, NextApiResponse } from 'next';

export type Data = {
  status: string;
  error?: string;
  json?: Array<{
    name: string;
    care: Record<string, string>;
  }>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const response = await fetch("https://gist.githubusercontent.com/m5rk/5dbdb4f8dbb9d2a84b46b6f9cfec82ad/raw/c142410765bb2eec0d3c94cdd37e8687a81f451b/plant_care.json");
      const data = await response.json();
      res.status(200).json({ status: 'success', json: data })
    } catch (error) {
      console.log(error, "error123")
      res.status(500).json({ status: 'error', error: 'Internal Server Error' });
    }
  }
}
