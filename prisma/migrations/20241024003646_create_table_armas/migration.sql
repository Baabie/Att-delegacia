-- CreateTable
CREATE TABLE "armas" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "crime_id" UUID NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "armas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "armas" ADD CONSTRAINT "armas_crime_id_fkey" FOREIGN KEY ("crime_id") REFERENCES "crimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
