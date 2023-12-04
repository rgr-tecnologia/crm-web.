"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type ClienteQueryProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export function ClienteQueryProvider(props: ClienteQueryProviderProps) {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
