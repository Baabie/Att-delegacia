-- CreateTable
CREATE TABLE "armas" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "armas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crimes" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "arma_id" UUID NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "crimes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "crimes" ADD CONSTRAINT "crimes_arma_id_fkey" FOREIGN KEY ("arma_id") REFERENCES "armas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
