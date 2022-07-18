 import Product from '../models/productModel.js'
 import CustomError from '../errors/CustomError.js'

export const getAllProduct = async (req, res, next) => {
    const products = await Product.find({})
    res.status(200).json(products)  
}

export const getSingleProduct = async (req, res, next) => {
  const id = req.params.id
  const product = await Product.findById(id)
  if (!product) {
    return next(new CustomError(404, 'Product not found'))
  }
  res.status(200).json(product)
}