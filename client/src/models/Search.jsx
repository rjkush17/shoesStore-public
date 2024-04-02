import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSearchData } from "../hook/useSearchData";
import { useNavigate } from "react-router-dom";
import searching from "../images/GIF/seaching.gif";
import searchIMG from "../images/search/searchIMG.jpg";
import searchNotFound from "../images/search/searchNotFound.jpg";

function Search({ handleSearchOpen }) {
  const { isLoading, errors, searchDATA, fetchData } = useSearchData();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    fetchData();

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  console.log(searchDATA);

  const [currentQ, setCurrentQ] = useState("");
  const [fliteredlist, setFliteredlist] = useState([]);

  const handleSearch = (e) => {
    const val = e.target.value;
    setCurrentQ(val);
    console.log(val);
    if (searchDATA.length >= 1) {
      const list = searchDATA.filter((item) =>
        item.title.toLowerCase().includes(val.toLowerCase())
      );
      setFliteredlist(list);
    }
  };

  const handleShop = () => {
    handleSearchOpen();
    navigate("/shop/all");
  };
  const handleSingle = (id) => {
    handleSearchOpen();
    navigate(`/productpage/${id}`);
  };

  return (
    <>
      <div className="w-screen text-center h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center top-0 z-50 fixed overflow-hidden">
        <section className="bg-white text-lg  rounded-md px-4 max-w-[500px] mobile:w-[500px] h-screen mobile:h-3/4">
          <div className="flex justify-between my-4">
            <p className="font-bold">Search</p>
            <p>
              {" "}
              <IoCloseSharp
                className="text-black text-3xl"
                onClick={handleSearchOpen}
              />
            </p>
          </div>
          <hr />
          <div className="flex justify-between items-center my-6">
            <input
              type="text"
              className="input rounded-full"
              placeholder="search here..."
              onChange={handleSearch}
            />
          </div>

          {errors && <p className={`${errors ? "error" : ""}`}>{errors}</p>}

          {isLoading && currentQ.length >= 1 && (
            <div className="w-full mobile:w-10/12 mx-auto">
              <img src={searching} alt="searching img" />
            </div>
          )}

          {currentQ.length == 0 && (
            <div>
              <div className="h-4/4 mt-16">
                <p className="w-8/12 mx-auto text-xl">
                  "Find Your Perfect Pair: Search Your Favorite Shoes Here"
                </p>
                <img src={searchIMG} alt="" />
              </div>
            </div>
          )}

          {currentQ.length >= 1 &&
            fliteredlist.length >= 1 &&
            searchDATA.length >= 1 && (
              <div className="overflow-y-scroll h-96">
                {fliteredlist.map((val, ind) => (
                  <div
                    key={ind}
                    onClick={() => handleSingle(val._id)}
                    className="flex mx-8 gap-4 items-center mb-4"
                  >
                    <div className="w-14">
                      <img src={val.images[0].front} alt="" />
                    </div>
                    <p>{val.title}</p>
                  </div>
                ))}
              </div>
            )}

          {currentQ.length >= 1 && fliteredlist.length <= 0 && (
            <div className="h-4/4 mt-12">
              <p className="w-10/12 mx-auto text-xl">
                "No Matches Found,Try a New Search or Explore Our Collections."
              </p>
              <div>
                <img src={searchNotFound} alt="" />
              </div>
              <button
                className="button bg-red-400 text-white"
                onClick={handleShop}
              >
                Explore shop
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Search;
