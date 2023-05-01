import { useState, useEffect } from "react";

type TResponse =  {body: string, headers?: {[key: string]: string}} | any


export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (options?: TResponse, cb?: (results: {[key: string]: string}) => void) => {
    try {
      setLoading(true);
      const finalOptions: TResponse = options
        ? {
            ...options,
            body: JSON.stringify(options.body),
            headers: { "Content-Type": "application/json" },
          }
        : null;
      const response = await fetch(url, finalOptions);

      if (response.ok) {
        const results = await response.json();
        setData(results);
        cb && cb(results);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError(`${err}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // call the function
    fetchData();
  }, [url]);
  return { data, loading, error, fetchData };
}
