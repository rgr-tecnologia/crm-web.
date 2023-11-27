import { Customer } from "@/types/customer";
import { NextApiRequest, NextApiResponse } from "next";

export function GET(req: NextApiRequest, res: NextApiResponse<Customer>) {
  const { uuid } = req.query;

  const customer: Customer = {
    uuid: "asdasdas",
    name: "John Doe",
  };

  return res.json(customer);
}

export function POST(req: NextApiRequest, res: NextApiResponse<Customer>) {
  const body = req.body;

  return res.json(body);
}

export function PUT(req: NextApiRequest, res: NextApiResponse<Customer>) {
  const body = req.body;

  return res.json(body);
}

export function DELETE(
  req: NextApiRequest,
  res: NextApiResponse<{ deleted: boolean }>
) {
  const { uuid } = req.query;

  return res.json({ deleted: true });
}
