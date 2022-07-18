import CustomError from './CustomError.js'


const errorHandler = (err, req, res, next) => {

  if (err.name === "ValidationError") {
    const error_field = Object.keys(err.errors);

    const e = error_field.map((field) => {
      return { [field]: err.errors[field].message };
    });
    return res.status(422).json(e);
  }

  if (err.code === 11000) {
    const error = new CustomError(409, "Already Exist");
    return res.status(error.status).json(error.message);
  }

  if (err.name === 'CastError') {
     const error = new CustomError(
       404,
       `Sorry we could'nt find what your looking for`
     );
     return res.status(error.status).json(error.message)
  }
     
  if (err instanceof CustomError) {
    return res.status(err.status).json(err.message)
  }

  if (process.env.DEBUG) {
    res.status(500).json({serverError: err.message})
  }
   
  res.status(500).json('Sorry something went wrong')
}

export default errorHandler