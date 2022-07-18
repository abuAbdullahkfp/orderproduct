import {Router} from 'express'
import asyncHandler from '../utils/asyncHandler.js'
import { getAllProduct, getSingleProduct } from '../controllers/productController.js'

const router = Router()

router.route('/').get(asyncHandler(getAllProduct))  

router.route('/:id').get(asyncHandler(getSingleProduct))

   
export default router