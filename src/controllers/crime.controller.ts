import { Request, Response } from "express";

export class CrimeController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { descricao } = req.body;
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }
}
