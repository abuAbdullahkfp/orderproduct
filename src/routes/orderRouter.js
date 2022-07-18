import {Router} from 'express'
import asyncHandler from '../utils/asyncHandler.js'
import { getOrderById } from '../controllers/orderController.js'


const router = Router()


router.route('/:id').get(asyncHandler(getOrderById)) 

export default router