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

      const data = await res.json();

      if (!res.ok) {
        console.log("data not found");
        setError(data.error);
        setIsLoading(false); 
        return;
      }
    
      setHomeList(data.homeProducts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError("Unable to fetch Data");
      setIsLoading(false); 
    }
  };

  return { homeList, errors, isLoading, fetchData };
}

export default useHomeData;
