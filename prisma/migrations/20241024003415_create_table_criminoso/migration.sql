-- CreateTable
CREATE TABLE "criminosos" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "criminosos_pkey" PRIMARY KEY ("id")
);
