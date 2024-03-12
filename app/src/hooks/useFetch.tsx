import { UseQueryResult, useQuery } from "react-query";

export function useFetch<T>(
  key: string,
  url: string,
  options?: RequestInit
): UseQueryResult<T> {
  return useQuery<T>(key, async () => {
    const res = await fetch(url, options);
    return res.json() as Promise<T>;
  });
}
