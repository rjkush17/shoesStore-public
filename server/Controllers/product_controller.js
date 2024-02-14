import Product from "../Models/project_model.js";

export const createProduct = async (req, res) => {
    try {
        const productData = req.body;

        // Check if productId already exists in the database
        // const existingProduct = await Product.findOne({ productId: productData.productId });
        // if (existingProduct) {
        //     return res.status(400).json({ error: "Product with this productId already exists" });
        // }

        // If productId does not exist, create a new product
        const product = new Product(productData);
        const savedProduct = await product.save();

        // Check if the product was successfully saved
        if (!savedProduct) {
            return res.status(400).json({ error: "Product not created" });
        }

        // as an error would throw and be caught by the catch block.
        res.status(201).json({ message: "Product created successfully", product: savedProduct });

    } catch (error) {
        console.error("Error in createProduct function", error);
        res.status(500).json({ error: "An error occurred during product creation" });
    }
};
