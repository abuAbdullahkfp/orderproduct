import mongoose from 'mongoose'


const tokenSchema = mongoose.Schema({
  token: {  
    type: String,
    required: true
  }
}, {timestamps: true})


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please enter your email address'],
      unique: [true, `Can't register with this email please try another email`],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      trim: true
    },
    role: {
      type: String,
      enum: ["Admin", "Customer"],
      default: "Customer",
      required: true,
      trim: true
    },
    tokens: [tokenSchema],
  },
  { timestamps: true }
);


const User =mongoose.model("User", userSchema)

export default User