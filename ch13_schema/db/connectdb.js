import mongoose from "mongoose";

const connectDb = async (database_url) => {
  try {
    const db_options = {
      dbName: "schooldb1",
    };

    await mongoose.connect(database_url, db_options);
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
