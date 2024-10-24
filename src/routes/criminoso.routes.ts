import { Router } from "express";
import { CriminosoMiddleware } from "../middlewares/criminoso.middleware";
import { CriminosoController } from "../controllers/criminoso.controller";

export class CriminosoRoutes {
  public static execute(): Router {
    const router = Router();

    //CREATE
    router.post(
      "/criminosos",
      CriminosoMiddleware.validate,
      CriminosoController.create
    );

    // FIND ALL
    router.get("/criminosos", CriminosoController.findAll);

    // FIND ONE
    router.get("/criminosos/:id", CriminosoController.findOneById);

    return router;
  }
}
