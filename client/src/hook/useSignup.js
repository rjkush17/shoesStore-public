import { useState } from "react";
import { baseURL } from "../assets/baseURL";
import { useAuth } from "../Context/authContext";
import { decode } from "../assets/decodeJWT";

export const useSignup = () => {
  const [isSignLoading, SetIsSignLoading] = useState(null);
  const [signError, setSignError] = useState(false);
  const { dispatch } = useAuth();

  const SignUp = async (value) => {
    setSignError(null);
    SetIsSignLoading(true);

    try {
      const res = await fetch(`${baseURL}registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await res.json();

      if (!res.ok) {
        setSignError(data.error);
        SetIsSignLoading(false);
        return false;
      }

      setSignError(null);
      SetIsSignLoading(false);
      const userDATA = decode(data.token);
      localStorage.setItem("userDetails", JSON.stringify(userDATA));
      dispatch({ type: "LOGIN", payload: userDATA });
      return true

    } catch (error) {
      console.log("error white fetching data ", error);
      setSignError(error.message || "an error occurred");
      SetIsSignLoading(false);
      return false
    }
  };
  return { isSignLoading, signError, SignUp };
};
