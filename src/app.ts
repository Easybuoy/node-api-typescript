import express, { Application, Request, Response, NextFunction } from "express";

import UserRoute from './routes/user';

const app: Application = express();


app.use(express.json());
app.use('/api/users', UserRoute);

app.get("/", (req: Request, res: Response, next: NextFunction): object => {
  return res.json({status: "success", message: 'Welcome to API Service'});
});


app.listen(3000, () => console.log("app listening"));
