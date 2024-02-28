import express from "express";
import mongoose from "mongoose";

import bookRoutes from "./routes/bookRoutes.js";

import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  console.log(req, "In \ log");
  return res.status(200).send("<p>Book store</p>");
});

app.use("/books", bookRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log(`App is listening to PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err, "error");
  });
