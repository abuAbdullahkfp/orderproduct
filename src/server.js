import express, { urlencoded } from 'express'
import cors from 'cors'
import chalk from 'chalk'
import morgan from 'morgan'
import connectToDb from './db/mongodb.js'
import productRouter from './routes/productRouter.js'
import orderRouter from './routes/orderRouter.js'
import errorHandler from './errors/errorHandler.js'

const app = express()

app.use(cors())
app.use(express.json({limit:'35mb'}))
app.use(urlencoded({limit:'35mb', extended: true}))
app.use(morgan('dev'))  

const PORT = process.env.PORT || 8000

app.use('/api/products', productRouter)
app.use('api/orders', orderRouter)


app.use(errorHandler)
const start = async () => {
   try {
     await connectToDb(process.env.DB_URL).then(() => console.log(chalk.blueBright(`Db connected`)))
     app.listen(PORT , () => console.log(chalk.magentaBright(`Server up on Port ${PORT}`)))
   } catch (e) {
     console.log(`Start error`, e)
   }
}

start()