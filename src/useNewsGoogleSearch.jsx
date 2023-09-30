import { useState, useEffect } from "react";
import API_KEY from "./keys";
import axios from "axios";
const CONTEXT_KEY = "c218852480ea04a3d";
const useGoogleSearch = term => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(response => response.json())
        .then(result => {
          setData(result);
        });
      // const result = await axios.get(
      //   `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      // );
      // setData(result);
      // console.log(result);
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
