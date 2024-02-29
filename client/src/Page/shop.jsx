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

  const filterByPrice = (lowerLimit, upperLimit) => {
    const sortedData = ShopData.filter(
      (e) => e.selling_price >= lowerLimit && e.selling_price <= upperLimit
    );
    console.log(sortedData);
    setSorted(sortedData);
  };

  return (
    <>
      {isLoading && <p>Please wait fetching Data...</p>}
      {errors && <p>{errors}</p>}

      {!errors && sorted && (
        <>
          <div className="">
            <p>Shop</p>
            <p>Shop &gt; {type}</p>
          </div>
          <div className="flex">
            <section className="w-8/12 grid gap-8 grid-cols-1 mobile:grid-cols-2 grid:grid-cols-3 tablet:grid-cols-3">
              {sorted.length > 0 ? (
                sorted.map((val, ind) => <ProductCard key={ind} val={val} />)
              ) : (
                <p>No products found within the specified price/Category.</p>
              )}
            </section>
            <section>
              <div className="">
                <h2>Categories</h2>
                <p className="">All type shoes</p>
                <p onClick={() => fetchData("men")}>mens shoes</p>
                <p onClick={() => navigate("/shop/women")}>women shoes</p>
                <p onClick={() => navigate("/shop/sports")}>Sports shoes</p>
                <p onClick={() => navigate("/shop/fashion")}>Fashion shoes</p>
              </div>
              <div>
                <h2>Sort by</h2>
                <p onClick={() => handleSort("title", "asc")}>Name A - Z</p>
                <p onClick={() => handleSort("title", "dsc")}>Name Z - A</p>

                <p onClick={() => handleSortByPrice("asc")}>
                  Price Low to High
                </p>
                <p onClick={() => handleSortByPrice("dsc")}>
                  Price High to low
                </p>
              </div>
              <div>
                <h2>Fliter by Price</h2>
                <p onClick={() => filterByPrice(0, 10)}>less then $100</p>
                <p onClick={() => filterByPrice(100, 120)}>$100 - $120</p>
                <p onClick={() => filterByPrice(120, 150)}>$120 - $150</p>
                <p onClick={() => filterByPrice(150, 10000)}>$150 +</p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Shop;
