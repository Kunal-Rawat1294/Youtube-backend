import dotenv from "dotenv";
import app from "./app.js";
import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectMongodb from "./db/index.js";
dotenv.config({
  path: "./env",
});
const port = process.env.PORT || 3000;
connectMongodb()
  .then(
    app.listen(port, () => {
      app.on("error", (error) => {
        console.log("app is crashed!!!", error);
      });
      console.log(`Server running on http://localhost:${port}`);
    })
  )
  .catch((err) => {
    console.log(`MONGODB connection error!!!!${err}`);
  });

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR:", error);
//       throw error;
//     });
//   } catch (error) {
//     console.log("error a gaya db connect karne ke doran");
//     console.log("ERROR", error);
//     throw error;
//   }
// })();
