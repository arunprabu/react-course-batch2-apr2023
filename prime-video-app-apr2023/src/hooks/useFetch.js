import { useState, useEffect } from 'react';

const useFetch = (url, method, body) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setApiData(data);
      })
      .catch((err) => {
        setIsError(err);
        setIsLoading(false);
      });
  }, [url, method]);

  return { isLoading, apiData, isError };
};

export default useFetch;
