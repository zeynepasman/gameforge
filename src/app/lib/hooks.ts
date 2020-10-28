import { useState } from "react";
import ApiService from "./api";

type QueryOptions<T> = {
  initialResponse: T
}

export function useFetch<T>(options: QueryOptions<T>) {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T>(options.initialResponse);

  const execute = (url: string) => {
    setLoading(true);
    ApiService.index<T>(url)
      .then(response => setResponse(response))
      .catch((error: string) => console.error(error))
      .finally(() => setLoading(false))
  };

  return { loading, response, execute };
}
