import { NextFunction, Request, Response } from "express";

export class CriminosoMiddleware {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { nome, crimeId } = req.body;

    if (!nome) {
      res.status(400).json({
        ok: false,
        message: "Name é obrigatório.",
      });
    }
    return next();
  }
}
