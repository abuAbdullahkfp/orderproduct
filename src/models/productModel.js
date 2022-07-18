import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true
  },
}, {timestamps: true})

const productSchema = mongoose.Schema(
  {
    user: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please enter the name of the product"],
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: [true, "Please enter the brand"],
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
      trim: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product