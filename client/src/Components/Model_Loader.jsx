import React, {useEffect} from 'react'
import preloader from "../images/loader.gif"

function Model_Loader() {

    useEffect(() => {
        document.body.classList.add("overflow-y-hidden");
    
        return () => {
          document.body.classList.remove("overflow-y-hidden");
        };
      }, []);

  return (
    <>
    <div className="w-screen h-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center top-0 z-50 fixed overflow-hidden cursor-wait">
      <section className="bg-white flex justify-center items-center rounded-md px-4 w-full mobile:max-w-[500px] mobile:w-[500px] h-screen mobile:h-96">
      <img src={preloader} alt="Loading..." className='' />
      </section>
    </div>
  </>
  )
}

export default Model_Loader