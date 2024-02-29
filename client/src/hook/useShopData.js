import { baseURL } from "../assets/baseURL";
import { useState } from "react";

export const useShopData = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [errors, setErrors] = useState(null);
  const [ShopData, setShopData] = useState([]);

  const fetchData = async (categoy) => {
    setErrors(null);
    setIsLoading(true);

    try {
      const res = await fetch(`${baseURL}shop/${categoy}`);

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.error);
        setIsLoading(false);
        console.log("error in response")
        return;
      }

      if (res.ok) {
        setIsLoading(false);
        setErrors(null);
        setShopData(data.homeProducts);
      }
    } catch (error) {
      console.log("error white fetching data ", error);
      setErrors(true);
      setIsLoading(false)
    }
  };

  return { isLoading, errors, ShopData, fetchData };
};
