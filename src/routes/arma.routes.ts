import { Router } from "express";
import { ArmaController } from "../controllers/arma.controller";
import { ArmaMiddleware } from "../middlewares/arma.middleware";
export class CrimeRoutes {
  public static execute(): Router {
    const router = Router();

    //CREATE
    router.post("/armas", ArmaMiddleware.validate, ArmaController.create);

    // FIND ALL
    router.get("/armas", ArmaController.findAll);

    // FIND ONE
    router.get("/armas/:id", ArmaController.findOneById);

    return router;
  }
}
