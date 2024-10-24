import {
  Crime as CrimePrisma,
  Prisma,
  Criminoso as CriminosoPrisma,
} from "@prisma/client";
import { prisma } from "../database/prisma.database";
import { ResponseApi } from "../types/response";
import {
  CreateCriminosoDto,
  CriminosoDto,
  QueryFilterDto,
} from "../dtos/criminoso.dto";

export class CriminosoService {
  public async create(
    createCriminoso: CreateCriminosoDto
  ): Promise<ResponseApi> {
    const { nome } = createCriminoso;

    const criminosoCriado = await prisma.criminoso.create({
      data: {
        nome: nome,
      },
    });

    return {
      ok: true,
      code: 201,
      message: "Criminoso cadastrado com sucesso!",
      data: this.mapToDto(criminosoCriado),
    };
  }

  public async findAll({ nome }: QueryFilterDto): Promise<ResponseApi> {
    const criminosos = await prisma.criminoso.findMany();
    return {
      ok: true,
      code: 200,
      message: "Criminosos buscados com sucesso!",
      data: criminosos.map((criminoso) => this.mapToDto(criminoso)),
    };
  }

  public async findOneById(id: string): Promise<ResponseApi> {
    const criminoso = await prisma.criminoso.findUnique({
      where: { id },
      include: {
        crimes: true,
      },
    });

    if (!criminoso) {
      return {
        ok: false,
        code: 404,
        message: "Criminoso não encontrado!",
      };
    }

    return {
      ok: true,
      code: 200,
      message: "Criminoso encontrado!",
      data: this.mapToDto(criminoso),
    };
  }

  private mapToDto(
    criminoso: CriminosoPrisma & { crimes?: CrimePrisma[] }
  ): CriminosoDto {
    return {
      id: criminoso.id,
      nome: criminoso.nome,
      crimes: criminoso.crimes?.map((crime) => ({
        id: crime.id,
        descricao: crime.descricao,
        data: crime.createdAt.toLocaleDateString,
      })),
    };
  }
}
