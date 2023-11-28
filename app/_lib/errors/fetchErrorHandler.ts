export const fetchErrorHandler = (error: unknown) => {
  if (error instanceof Error) {
    return Response.json({ error: error.message }, { status: 400 });
  } else {
    return Response.json({ error: "Unknown error" }, { status: 500 });
  }
};
