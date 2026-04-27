import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import routes from "./routes/index.js";

dotenv.config();

export const app = express();
export const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.use("/api", routes)
