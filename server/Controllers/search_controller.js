import product_model from "../Models/project_model.js";

const get_searchproduct = async (req, res) => {
  try {
    // Use the product model to find all products and select specific fields
    const data = await product_model.find({},{
      title: 1,
      _id: 1,
      "images.front": 1,
    });

    // Check if no data is found and return a 400 error
    if (!data){
      return res.status(400).json({ errors: "data not found" });
    };
    // If data is found, return it with a 201 status code
    res.status(201).json({ message: "search listng get successfully", list: data });
  } catch (error){
    // Log any errors to the console and return a 400 status code
    console.log("error in search controller ", error);
   return res.status(400).json({ errors: "Internal Server Error" });
  }
};

export default get_searchproduct