import { Request, Response } from "express";

export default {
  home(req: Request, res: Response) {
    try {
      res.status(200).send("<h1>Welcome to my API!</h1>");

    } catch (error) {
      const _err = error as Error;

      res.status(500).json({
        message: "Error displaying api base url",
        error: _err.message,
      });
    }
  }
}