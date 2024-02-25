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
