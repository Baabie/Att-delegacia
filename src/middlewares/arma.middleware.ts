import { NextFunction, Request, Response } from "express";

export class ArmaMiddleware {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { nome, condicao } = req.body;

    if (!nome) {
      res.status(400).json({
        ok: false,
        message: "Nome/Modelo da arma é obrigatório.",
      });
    }
    if (!condicao) {
      res.status(400).json({
        ok: false,
        message: "Condição da arma é obrigatória.",
      });
    }
    return next();
  }
}
