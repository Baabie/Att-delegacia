export interface CreateCriminosoDto {
  nome: string;
}

export interface CrimesDto {
  id: string;
  descricao: string;
}

export interface CriminosoDto {
  id: string;
  nome: string;
  crimes?: CrimesDto[];
}

export interface QueryFilterDto {
  nome?: string;
}
