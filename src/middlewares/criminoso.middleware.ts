import { NextFunction, Request, Response } from "express";

export class CriminosoMiddleware {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { nome, situacao } = req.body;

    if (!nome) {
      res.status(400).json({
        ok: false,
        message: "Nome é obrigatório.",
      });
    }
    if (!situacao) {
      res.status(400).json({
        ok: false,
        message: "Situação do suspeito é obrigatória.",
      });
    }
    return next();
  }
}
