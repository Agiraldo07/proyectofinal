import { Router } from "express";
import { ServicioController } from "../controllers/ServicioController.mjs";

class ServicioRoutes {
  constructor() {
    this.router = Router();
    this.controller = new ServicioController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(this.controller.createServicio);
    this.router
      .route("/:servicio_id")
      .get(this.controller.getOne)
      .put(this.controller.updateServicio)
      .delete(this.controller.deleteServicio);
  }
}

export { ServicioRoutes };