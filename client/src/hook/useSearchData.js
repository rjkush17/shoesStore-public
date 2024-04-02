import { baseURL } from "../assets/baseURL";
import { useState } from "react";

export const useSearchData = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [errors, setErrors] = useState(null);
  const [searchDATA, setSearchDATA] = useState([]);

  const fetchData = async () => {
    setErrors(null);
    setIsLoading(true);

    try {
      const res = await fetch(`${baseURL}search`);

      const data = await res.json();

      if (!res.ok){
        setErrors(data.errors);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setErrors(null);
      setSearchDATA(data.list);
    } catch (error) {
      console.log("error white fetching data ", error);
      setErrors(true);
      setIsLoading(false);
    }
  };

  return { isLoading, errors, searchDATA, fetchData };
};
