import { useEffect, useState } from "react";

const useJokeFetcher = (endpoint) => {
  const [joke, setJoke] = useState(null);

  //Joke fetching method
  const fetchJoke = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.log("Error while fetching joke", error);
    }
  };
  // Fetch a joke on component mount
  useEffect(() => {
    fetchJoke();
  }, [endpoint]);

  return joke;
};

export default useJokeFetcher;
