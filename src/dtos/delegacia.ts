export interface CreateCriminosoDto {
  nome: string;
  situacao: string;
}

export interface CreateCrimeDto {
  nome: string;
  descricao: string;
  criminosoId: string;
}

export interface CreateArmaDto {
  nome: string;
  condicao: string;
  crimeId?: string;
}

export interface CriminosoDto {
  id: string;
  nome: string;
  situacao: string;
  crimes?: CrimeDto[];
}

export interface CrimeDto {
  id: string;
  nome: string;
  descricao: string;
  ocorrencia: Date;
  criminoso?: CriminosoDto;
  armas?: ArmaDto[];
}

export interface ArmaDto {
  id: string;
  nome: string;
  condicao: string;
}

export interface QueryFilterDto {
  nome?: string;
  descricao?: string;
}
