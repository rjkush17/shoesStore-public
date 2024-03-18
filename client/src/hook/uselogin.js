import { baseURL } from "../assets/baseURL";
import { useState } from "react";
import { useAuth } from "../Context/authContext";
import { decode } from "../assets/decodeJWT";

export const uselogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const { dispatch } = useAuth();

  const fetchData = async (userDetails) => {
    setErrors(null);
    setIsLoading(true);

    try {
      const res = await fetch(`${baseURL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.error || "an error occurred");
        setIsLoading(false);
        return false;
      }
      const userDATA = decode(data.token);

      localStorage.setItem("userDetails", JSON.stringify(userDATA));
      setIsLoading(false);
      setErrors(null);
      dispatch({ type: "LOGIN", payload: userDATA });
      return true
      
    } catch (error) {
      console.log("error white fetching data ", error);
      setErrors(error.message || "an error occurred");
      setIsLoading(false);
      return false
    }
  };

  return { isLoading, errors, fetchData };
};
