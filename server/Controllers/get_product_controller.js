import product_model from "../Models/project_model.js";

export const home_controller = async (req, res) => {
  try {
    const homeData = await product_model.find(
      { label: { $in: ["latest", "best seller", "sales", "featured"] } },
      {
        title: 1,
        "images.front": 1,
        selling_price: 1,
        label: 1,
      }
    );
    if (!homeData) {
      return res.status(400).json({ error: "data not found" });
    }

    res.status(200).json({ homeProducts: homeData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Internal Server Error" });
  }
};

export const get_singal_product = async (req, res) => {
  try {
    const productID = req.params.id;
    const productData = await product_model.findOne({ _id: productID });
    if (!productData) {
      return res.status(400).json({ error: "product Data not found" });
    }
    res.status(200).json({ listingData: productData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Internal Server Error" });
  }
};

export const get_shoplist = async (req, res) => {
  try {
    const categoryName = req.params.name;
    let shopData;

    if (categoryName === "all") {
      shopData = await product_model.find({}, {
        title: 1,
        "images.front": 1,
        selling_price: 1,
        categories: 1,
      });
    } else {
      shopData = await product_model.find(
        { categories: { $in: [`${categoryName}`] } },
        {
          title: 1,
          "images.front": 1,
          selling_price: 1,
          categories: 1,
        }
      );
    }
    if (shopData.length === 0) {
      return res.status(404).json({ error: "data not found" });
    }
    res.status(200).json({ homeProducts: shopData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

