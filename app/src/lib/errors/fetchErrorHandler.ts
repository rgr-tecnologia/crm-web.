export const fetchErrorHandler = (error: unknown) => {
  if (error instanceof Error) {
    throw Response.json({ error: error.message }, { status: 400 });
  } else {
    throw Response.json({ error: "Unknown error" }, { status: 500 });
  }
};
