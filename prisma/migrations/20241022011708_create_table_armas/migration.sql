-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "hstore" WITH SCHEMA "Delegacia";

-- CreateTable
CREATE TABLE "armas" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "armas_pkey" PRIMARY KEY ("id")
);
