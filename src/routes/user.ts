import express, { Request, Response } from "express";
const Router = express.Router();

Router.get("/", (req: Request, res: Response) => {
  res.json({status: 'success', message: 'User Route Is Working'});
});

export default Router;
