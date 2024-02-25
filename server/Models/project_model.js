import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  profile: {
    type: String,
    require: true,
    trim: true,
    min: 4,
    max: 15,
    unique: false,
  },
  img: {
    type: String,
    require: false,
  },
  star: {
    type: Number,
  },
  review: {
    type: String,
    trim: true,
  },
});

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
    min: 8,
    max: 25,
    unique: false,
  },
  productID: {
    type: String,
    require: true,
    unique: true,
  },
  images: [
    {
      front: {
        type: String,
        require: true,
        trim: true,
      },
      second: {
        type: String,
        trim: true,
      },
      third: {
        type: String,
        trim: true,
      },
      fourth: {
        type: String,
        trim: true,
      },
      fifth: {
        type: String,
        trim: true,
      },
    },
  ],
  description: {
    type: String,
    require: true,
    trim: true,
    min: 8,
    max: 400,
    unique: false,
  },
  selling_price: {
    type: Number,
    require: true,
  },
  mrp: {
    type: Number,
    require: true,
  },
  stocks: {
    type: Number,
    require: true,
  },
  label: [
    {
      type: String,
    },
  ],
  categories: [{ type: String }],
  reviews: [reviewsSchema],
});

const product_model = new mongoose.model("product", ProductSchema);

export default product_model;
