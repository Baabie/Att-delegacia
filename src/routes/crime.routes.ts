import { Router } from "express";

export class CrimeRoutes {
  public static execute(): Router {
    const router = Router();

    router.post("/criminosos");

    router.get("/criminosos", []);

    router.post("/crimes", CreateCrimeMiddleware);

    router.get("/crimes");

    router.post("/armas");

    router.get("/armas");
  }
}
