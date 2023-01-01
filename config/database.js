import mongoose from "mongoose";
//connecting Mongoose database
export const connectDB = async (req, res) => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Database is connected with ${connection.host}`);
};
