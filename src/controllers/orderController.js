import CustomError from '../errors/CustomError.js'
import Order from '../models/orderModel.js'


export const addOrderItems = async (req, res, next) => {
  if (orderItems && orderItems.length === 0 ){
    res.status(400)
  }else {
    const order = await Order.create(req.body)
    res.status(201).json(order)
  }
}

export const getOrderById = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate('user', 'name', 'email')

  if (order) {
    res.status(200).json(order)
  } else {
    return next(new CustomError(404, 'Order not found'))
  }
}

