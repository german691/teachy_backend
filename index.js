import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
const { HOST, PORT } = process.env;

const startApp = () => {
  app.listen(PORT, () => {
    console.log(`App running at: http://${HOST}:${PORT}/api/v1`);
  });
};

startApp();
