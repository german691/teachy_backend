import express from "express";
import cors from "cors";
import { notFound } from "./middlewares/error/notFound.js";
import connectDatabase from "./config/database.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import errorHandler from "./middlewares/error/errorHandler.js";
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
app.use("/api/v1", routes);

// error handlers
app.use(notFound); // 404
app.use(errorHandler); // error

// database
connectDatabase({ MONGODB_URI: process.env.MONGODB_URI });

export default app;
