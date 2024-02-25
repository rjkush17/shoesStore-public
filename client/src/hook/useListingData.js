import { baseURL } from "../assets/baseURL";
import { useState } from "react";

export const useListingData = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [errors, setErrors] = useState(null);
  const [listingData, setListingData] = useState([]);

  const fetchData = async (productID) => {
    setErrors(null);
    setIsLoading(true);

    try {
      const res = await fetch(`${baseURL}listingData/${productID}`);

      if (!res.ok) {
        setErrors(true);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      if (res.ok) {
        setIsLoading(false);
        setErrors(null);
        setListingData(data.listingData);
      }
    } catch (error) {
      console.log("error white fetching data ", error);
      setErrors(true);
      setIsLoading(false)
    }
  };

  return { isLoading, errors, listingData, fetchData };
};
