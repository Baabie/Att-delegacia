/*
  Warnings:

  - Added the required column `condicao` to the `armas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `crimes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situacao` to the `criminosos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "armas" ADD COLUMN     "condicao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "crimes" ADD COLUMN     "nome" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "criminosos" ADD COLUMN     "situacao" TEXT NOT NULL;
