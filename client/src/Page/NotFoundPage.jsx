import React, { useEffect } from "react";
import PNF from "../images/404.jpg";
import { useNavigate } from "react-router-dom";

function NotFoundPage({ funcNav }) {
  useEffect(()=>{
    funcNav(false);
    document.title = "404 Not found page"
    return () => {
      funcNav(true); 
  };
  })

  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="w-11/12 mobile:w-8/12 tablet:w-3/12 mx-auto">
        <img src={PNF} alt="page not found" />
      </div>
      <div className="w-fit mx-auto my-8">
        {" "}
        <button className="button bg-red-400 text-white" onClick={()=>navigate("/")}>Go Home</button>
      </div>
    </React.Fragment>
  );
}

export default NotFoundPage;
