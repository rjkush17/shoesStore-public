import { baseURL } from "../assets/baseURL";
import { useState } from 'react'; 

function useHomeData() {
  const [homeList, setHomeList] = useState([]);
  const [errors, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const res = await fetch(`${baseURL}home/`);

      if (!res.ok) {
        console.log("data not found");
        setError(true);
        setIsLoading(false); 
        return;
      }
      const data = await res.json();
      setHomeList(data.homeProducts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false); 
    }
  };

  return { homeList, errors, isLoading, fetchData };
}

export default useHomeData;
