import {
  Crime as CrimePrisma,
  Arma as ArmaPrisma,
  Criminoso as CriminosoPrisma,
} from "@prisma/client";
import { prisma } from "../database/prisma.database";
import { ResponseApi } from "../types/response";
import { CreateCrimeDto, CrimeDto, QueryFilterDto } from "../dtos/delegacia";

export class CrimeService {
  public async create(createCrime: CreateCrimeDto): Promise<ResponseApi> {
    const { nome, descricao, criminosoId } = createCrime;

    const crimeCriado = await prisma.crime.create({
      data: {
        nome: nome,
        descricao: descricao,
        criminosoId: criminosoId,
      },
    });

    const crimeRelacionado = await prisma.crime.findUnique({
      where: { id: crimeCriado.id },
      include: {
        criminoso: true,
        armas: true,
      },
    });

    if (!crimeRelacionado) {
      return {
        ok: false,
        code: 404,
        message: "Crime não encontrado após a criação!",
      };
    }

    return {
      ok: true,
      code: 201,
      message: "Crime cadastrado com sucesso!",
      data: this.mapToDto(crimeRelacionado),
    };
  }

  public async findAll({ nome }: QueryFilterDto): Promise<ResponseApi> {
    const crimes = await prisma.crime.findMany({
      where: {
        nome: nome ? { contains: nome, mode: "insensitive" } : undefined,
      },
      include: {
        criminoso: true,
        armas: true,
      },
    });

    return {
      ok: true,
      code: 200,
      message: "Crimes buscados com sucesso!",
      data: crimes.map((crime) => this.mapToDto(crime)),
    };
  }

  public async findOneById(id: string): Promise<ResponseApi> {
    const crime = await prisma.crime.findUnique({
      where: { id },
      include: {
        criminoso: true,
        armas: true,
      },
    });

    if (!crime) {
      return {
        ok: false,
        code: 404,
        message: "Crime não encontrado!",
      };
    }

    return {
      ok: true,
      code: 200,
      message: "Crime encontrado!",
      data: this.mapToDto(crime),
    };
  }

  private mapToDto(
    crime: CrimePrisma & {
      criminoso?: CriminosoPrisma | null;
      armas?: ArmaPrisma[];
    }
  ): CrimeDto {
    return {
      id: crime.id,
      nome: crime.nome,
      descricao: crime.descricao,
      ocorrencia: crime.createdAt,
      criminoso: crime.criminoso
        ? {
            id: crime.criminoso.id,
            nome: crime.criminoso.nome,
            situacao: crime.criminoso.situacao,
          }
        : undefined,

      armas: crime.armas?.map((arma) => ({
        id: arma.id,
        nome: arma.nome,
        condicao: arma.condicao,
      })),
    };
  }
}
