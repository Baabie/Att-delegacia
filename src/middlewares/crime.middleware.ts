import { NextFunction, Request, Response } from "express";

export class CrimeMiddleware {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { nome, descricao } = req.body;

    if (!nome) {
      res.status(400).json({
        ok: false,
        message: "Nome/Título é obrigatório.",
      });
    }
    if (!descricao) {
      res.status(400).json({
        ok: false,
        message: "Descrição é obrigatória.",
      });
    } else if (descricao.length < 11) {
      res.status(400).json({
        ok: false,
        message: "Descrição deve conter mais de 10 caracteres.",
      });
    }
    return next();
  }
}
