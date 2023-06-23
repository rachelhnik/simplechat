import express, { Request, Response } from "express";
export const appRouter = express.Router();

appRouter.get("/", (req: Request, res: Response) => {
    res.send("hello");
});
