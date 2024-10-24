import { Request, Response } from "express";
import { CrimeService } from "../services/crime.service";
import { CreateCrimeDto } from "../dtos/delegacia";

export class CrimeController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { nome, descricao, criminosoId } = req.body;

      const data: CreateCrimeDto = {
        nome,
        descricao,
        criminosoId,
      };

      const service = new CrimeService();
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
      const { descricao } = req.query;

      const service = new CrimeService();
      const result = await service.findAll({
        descricao: descricao as string,
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

      const service = new CrimeService();
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
