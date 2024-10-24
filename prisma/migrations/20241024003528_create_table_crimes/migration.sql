-- CreateTable
CREATE TABLE "crimes" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "criminoso_id" UUID NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "crimes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "crimes" ADD CONSTRAINT "crimes_criminoso_id_fkey" FOREIGN KEY ("criminoso_id") REFERENCES "criminosos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
