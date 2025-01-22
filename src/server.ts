import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import express, { Express } from "express";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");

  next();
});

const initApp = async () => {
  return app;
};

export default initApp;
