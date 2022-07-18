import mongoose from 'mongoose' 


const connectToDb = (url) => {
  return mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}


export default connectToDb