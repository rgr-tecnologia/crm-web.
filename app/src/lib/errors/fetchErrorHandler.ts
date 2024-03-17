export const fetchErrorHandler = (error: unknown) => {
  if (error instanceof Error) {
    throw error;
  }
  throw new Error("Erro desconhecido");
};
