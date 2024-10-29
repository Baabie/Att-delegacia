import { Request, Response } from "express";
import { CreateArmaDto } from "../dtos/delegacia";
import { ArmaService } from "../services/arma.service";

export class ArmaController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { nome, condicao, crimeId } = req.body;

      const data: CreateArmaDto = {
        nome,
        condicao,
        crimeId,
      };

      const service = new ArmaService();
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
      const { condicao } = req.query;

      const service = new ArmaService();
      const result = await service.findAll({
        condicao: condicao as string,
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

      const service = new ArmaService();
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
