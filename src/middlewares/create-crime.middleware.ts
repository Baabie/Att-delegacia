import { NextFunction, Request, Response } from "express";

export class CreateCrimeMiddleware {
  public static validationRequired(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { descricao } = req.body;

    if (!descricao) {
      res.status(400).json({
        ok: false,
        message: "Descrição é obrigatório",
      });
    } else if (descricao.length < 11) {
      res.status(400).json({
        ok: false,
        message: "Deve conter mais de 10 caracteres",
      });
    }
    return next();
  }
}
