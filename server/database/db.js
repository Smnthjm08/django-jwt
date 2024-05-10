import mongoose from "mongoose";

//database connection
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "task-manager",
    })
    .then(() => {
      console.log("Connected to dB");
    })
    .catch((err) => {
      console.log(`Error occured while connecting to dB: ${err}`);
    });
};
