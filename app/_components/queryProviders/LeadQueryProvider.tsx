"use client";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient } from "react-query";

type LeadQueryProviderProps = {
  children: React.ReactNode;
};

export function LeadQueryProvider(props: LeadQueryProviderProps) {
  const { children } = props;
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
