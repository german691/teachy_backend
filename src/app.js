import express from "express";
import cors from "cors";
import { notFound } from "./middlewares/error/notFound.js";
import connectDatabase from "./config/database.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

// app config
const app = express();
const bodyParser = express.json;

// # ------ Middleware
// cross origin
app.use(cors());

// parser
app.use(bodyParser());

// entry point
app.use("/api", routes);

// not found
app.use(notFound);

// database
connectDatabase({ MONGODB_URI: process.env.MONGODB_URI });

export default app;
