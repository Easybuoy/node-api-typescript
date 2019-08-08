import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction): object => {
    return res.json({ status: "success", message: "Welcome to API Service" });
  }
);

app.listen(3000, () => console.log("app listening"));
