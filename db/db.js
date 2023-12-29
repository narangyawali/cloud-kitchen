import mongoose from "mongoose";

const db = async () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log("connected!");
    })
    .catch((err) => {
      console.log("error in database");
    });
};

export default db
