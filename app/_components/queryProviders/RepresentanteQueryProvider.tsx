"use client";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient } from "react-query";

type RepresentanteQueryProviderProps = {
  children: React.ReactNode;
};

export function RepresentanteQueryProvider(
  props: RepresentanteQueryProviderProps
) {
  const { children } = props;
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
