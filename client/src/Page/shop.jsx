import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShopData } from "../hook/useShopData";
import ProductCard from "../Components/ProductCard";
import { useNavigate } from "react-router-dom";

function Shop() {
  const { type } = useParams();
  const navigate = useNavigate();

  const { isLoading, errors, ShopData, fetchData } = useShopData();
  const [sorted, setSorted] = useState(ShopData);
  useEffect(() => {
    fetchData(type);
  }, [type]);

  useEffect(() => {
    setSorted(ShopData);
  }, [ShopData]);

  //function to sort prodcut by name
  const handleSort = (sortProperty, sortOrder = "asc") => {
    const sortedData = [...ShopData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortProperty].localeCompare(b[sortProperty]);
      } else {
        // Assuming sortOrder is 'desc' for descending order
        return b[sortProperty].localeCompare(a[sortProperty]);
      }
    });
    setSorted(sortedData);
  };

  //function for sort products by selling price
  const handleSortByPrice = (sortOrder) => {
    const sortedData = [...ShopData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.selling_price - b.selling_price;
      } else {
        return b.selling_price - a.selling_price;
      }
    });
    setSorted(sortedData);
  };

  //function for fliter product by range
  const filterByPrice = (lowerLimit, upperLimit) => {
    const sortedData = ShopData.filter(
      (e) => e.selling_price >= lowerLimit && e.selling_price <= upperLimit
    );
    setSorted(sortedData);
  };

  return (
    <>
      {isLoading && <p>Please wait fetching Data...</p>}
      {errors && <p>{errors}</p>}

      {!isLoading && !errors && sorted && (
        <div className="w-screen overflow-x-hidden">
          <div className="bg-zinc-100 text-center py-8 mobile:py-16 my-10 w-full">
            <p className="text-4xl mobile:text-7xl mb-2 mobile:mb-6">SHOP</p>
            <p className="text-xl uppercase">Shop &gt; {type}</p>
          </div>
          <div className="flex flex-col mobile:flex-row">
            <section className=" w-screen mobile:w-10/12 grid gap-0 mobile:gap-8 grid-cols-1 mobile:grid-cols-2 grid:grid-cols-3 tablet:grid-cols-3">
              {sorted.length > 0 ? (
                sorted.map((val, ind) => <ProductCard key={ind} val={val} />)
              ) : (
                <p>No products found within the specified price/Category.</p>
              )}
            </section>
            <section className="leading-8 w-full mobile:w-2/12 pl-6 mobile:ml-0 text-lg text-gray-500">
              <div className="mt-8">
                <h2 className="font-bold underline mb-3 text-black">Categories</h2>
                <p className="" onClick={() => navigate("/shop/all")}>All type shoes</p>
                <p onClick={() => navigate("/shop/men")}>mens shoes</p>
                <p onClick={() => navigate("/shop/women")}>women shoes</p>
                <p onClick={() => navigate("/shop/sports")}>Sports shoes</p>
                <p onClick={() => navigate("/shop/fashion")}>Fashion shoes</p>
              </div>
              <div className="mt-8">
                <h2  className="font-bold underline mb-3 text-black">Sort by</h2>
                <p onClick={() => handleSort("title", "asc")}>Name A - Z</p>
                <p onClick={() => handleSort("title", "dsc")}>Name Z - A</p>
                <p onClick={() => handleSortByPrice("asc")}>
                  Price Low to High
                </p>
                <p onClick={() => handleSortByPrice("dsc")}>
                  Price High to low
                </p>
              </div>
              <div className="mt-8">
                <h2  className="font-bold underline mb-3 text-black">Fliter by Price</h2>
                <p onClick={() => filterByPrice(0, 100)}>less then $100</p>
                <p onClick={() => filterByPrice(100, 120)}>$100 - $120</p>
                <p onClick={() => filterByPrice(120, 150)}>$120 - $150</p>
                <p onClick={() => filterByPrice(150, 10000)}>$150+</p>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Shop;
