import mongoose from "mongoose";

const connectDatabase = async ({ MONGODB_URI }) => {
  try {
    if (!MONGODB_URI) {
      throw new Error("'MONGODB_URI' not found inside .env file");
    }
    await mongoose.connect(MONGODB_URI);
    return console.log("Successfuly connected to MongoDB WCLUSTER");
  } catch (error) {
    return console.error(error);
  }
};

export default connectDatabase;
