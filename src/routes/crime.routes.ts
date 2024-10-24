import { Router } from "express";
import { CrimeMiddleware } from "../middlewares/crime.middleware";
import { CrimeController } from "../controllers/crime.controller";
export class CrimeRoutes {
  public static execute(): Router {
    const router = Router();

    //CREATE
    router.post("/crimes", CrimeMiddleware.validate, CrimeController.create);

    // FIND ALL
    router.get("/crimes", CrimeController.findAll);

    // FIND ONE
    router.get("/crimes/:id", CrimeController.findOneById);

    return router;
  }
}
