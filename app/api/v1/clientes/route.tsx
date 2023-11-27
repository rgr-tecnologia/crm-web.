import { Customer } from "@/types/customer";

export function GET() {
  try {
    const customers: Customer[] = [
      { uuid: "asdasdas", name: "John Doe" },
      { uuid: "asdgfdgd", name: "Jane Doe" },
    ];

    return Response.json(customers);
  } catch (error) {
    if (error instanceof Error)
      return Response.json({ error: error.message }, { status: 500 });
    else return Response.json({ error: "Unknown error" }, { status: 500 });
  }
}

export function POST(req: Request) {
  try {
    const body = req.json();

    return Response.json(body);
  } catch (error) {
    if (error instanceof Error)
      return Response.json({ error: error.message }, { status: 500 });
    else return Response.json({ error: "Unknown error" }, { status: 500 });
  }
}
