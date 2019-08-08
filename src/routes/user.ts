import express, { Request, Response } from "express";
const Router = express.Router();

Router.get("/", (req: Request, res: Response) => {
    const add = (num1: number, num2: number) => {
        return num1 + num2;
    }
    const addition = add(1,2);
  res.json({status: 'success', message: 'User Route Is Working'});
});

export default Router;
