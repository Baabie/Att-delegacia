import { Request, Response } from "express";
import { CreateCriminosoDto } from "../dtos/delegacia";
import { CriminosoService } from "../services/criminoso.service";

export class CriminosoController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { nome, situacao } = req.body;

      const data: CreateCriminosoDto = {
        nome,
        situacao,
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

      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async findOneById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const service = new CriminosoService();
      const result = await service.findOneById(id);

      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }
}
