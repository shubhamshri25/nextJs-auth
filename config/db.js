import mongoose from "mongoose";

const connectionString = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log(`Successfully connected to mongoDb`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
