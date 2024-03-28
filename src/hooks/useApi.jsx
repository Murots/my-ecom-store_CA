import { useState, useEffect } from "react";

/**
 * Custom API hook for fetching data.
 */
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData(url);
  }, [url]);

  return { data, isLoading, isError };
};

export default useApi;
