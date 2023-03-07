import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (options, cb) => {
    try {
      setLoading(true);
      const finalOptions = options
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
        cb(results);
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
    fetchData(url);
  }, [url]);
  console.log("ERROR", error);
  return [{ data, loading, error }, fetchData];
}
