import { useEffect, useState } from "react";
import apiClient from "../services/get-client.ts";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, err, isLoading };
};

export default useGenres;
