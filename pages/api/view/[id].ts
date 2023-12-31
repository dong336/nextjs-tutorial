import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ id: req.query.id as string });
}
