import { Router } from "express";
import { CitaController } from "../controllers/CitaController.mjs";

class CitaRoutes {
  constructor() {
    this.router = Router();
    this.controller = new CitaController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(this.controller.createCita);
    this.router
      .route("/:cita_id")
      .get(this.controller.getOne)
      .put(this.controller.updateCita)
      .delete(this.controller.deleteCita);
  }
}

export { CitaRoutes };