import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";

const app = express();

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432")
});

const connectToDB = async () => {
  try {
    await pool.connect();
    console.log('db is created and ready...')
  } catch (err) {
    console.log(err);
  }
};

connectToDB();

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("test route is working...");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is up and running at ${process.env.SERVER_PORT}...`);
});
