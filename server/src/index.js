/* eslint-disable no-undef */
import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import usersRoutes from "./concepts/user/routes/index.js";
import categoryRoutes from "./concepts/category/routes/index.js";
import heightRoutes from "./concepts/height/routes/index.js";
import offerRoutes from "./concepts/offer/routes/index.js";

if (!process.env.MONGO_CONNECT_URI)
  throw new Error("You must provide uri for mongo connect in env.");

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started`);
});

mongoose
  .connect(process.env.MONGO_CONNECT_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected into MongoDB.."))
  .catch((err) => console.error(err));

app.use("/users", usersRoutes);
app.use("/categories", categoryRoutes);
app.use("/heights", heightRoutes);
app.use("/offers", offerRoutes);
