import { Arma as ArmaPrisma, Crime as CrimePrisma } from "@prisma/client";
import { prisma } from "../database/prisma.database";
import { ArmaDto, CreateArmaDto, QueryFilterDto } from "../dtos/delegacia";
import { ResponseApi } from "../types/response";

export class ArmaService {
  public async create(createArma: CreateArmaDto): Promise<ResponseApi> {
    const { nome, condicao, crimeId } = createArma;

    const armaCriada = await prisma.arma.create({
      data: {
        nome: nome,
        condicao: condicao,
        crimeId: crimeId,
      },
    });

    const armaRelacionada = await prisma.arma.findUnique({
      where: { id: armaCriada.id },
      include: {
        crime: true,
      },
    });

    if (!armaRelacionada) {
      return {
        ok: false,
        code: 404,
        message: "Arma não encontrado após a criação!",
      };
    }

    return {
      ok: true,
      code: 201,
      message: "Arma cadastrada com sucesso!",
      data: this.mapToDto(armaCriada),
    };
  }

  public async findAll({ nome }: QueryFilterDto): Promise<ResponseApi> {
    const armas = await prisma.arma.findMany({
      where: {
        nome: nome ? { contains: nome, mode: "insensitive" } : undefined,
      },
      include: {
        crime: true,
      },
    });

    return {
      ok: true,
      code: 200,
      message: "Armas buscados com sucesso!",
      data: armas.map((arma) => this.mapToDto(arma)),
    };
  }

  public async findOneById(id: string): Promise<ResponseApi> {
    const arma = await prisma.arma.findUnique({
      where: { id },
      include: {
        crime: true,
      },
    });

    if (!arma) {
      return {
        ok: false,
        code: 404,
        message: "Arma não encontrado!",
      };
    }

    return {
      ok: true,
      code: 200,
      message: "Arma encontrado!",
      data: this.mapToDto(arma),
    };
  }

  private mapToDto(
    arma: ArmaPrisma & {
      crime?: CrimePrisma | null;
    }
  ): ArmaDto {
    return {
      id: arma.id,
      nome: arma.nome,
      condicao: arma.condicao,
      crime: arma.crime
        ? {
            id: arma.crime.id,
            nome: arma.crime.nome,
            descricao: arma.crime.descricao,
          }
        : undefined,
    };
  }
}
