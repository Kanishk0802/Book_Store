import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoutes from "./routes/bookRoutes.js";

import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.use(express.json());

//Middleware for handling CORS policy
// Option 1: All all Origin with Default of cors(*)
app.use(cors());
//Option:2 : Allow custom origins
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"]
// }));

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
