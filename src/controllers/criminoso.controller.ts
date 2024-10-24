import { Request, Response } from "express";
import { CreateCriminosoDto } from "../dtos/criminoso.dto";
import { CriminosoService } from "../services/criminoso.service";

export class CriminosoController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { nome } = req.body;

      const data: CreateCriminosoDto = {
        nome,
      };

      const service = new CriminosoService();
      const result = await service.create(data);
      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const { nome } = req.query;

      const service = new CriminosoService();
      const result = await service.findAll({
        nome: nome as string,
      });
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }
}
