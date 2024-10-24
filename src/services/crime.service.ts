import { ResponseApi } from "../types/response";

export class CrimeService {
  public async create(createCrime: string): Promise<ResponseApi> {
    const descricao = createCrime;

    const crimeCriado = await prisma.crime.create({
      data: {
        descricao,
      },
    });

    const criminoso = await prisma.criminoso.create({});
  }
}
