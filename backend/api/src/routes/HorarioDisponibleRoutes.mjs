import { Router } from "express";
import { HorarioDisponibleController } from "../controllers/HorarioDisponibleController.mjs";

class HorarioDisponibleRoutes {
  constructor() {
    this.router = Router();
    this.controller = new HorarioDisponibleController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(this.controller.createHorarioDisponible);
    this.router
      .route("/:horario_id")
      .get(this.controller.getOne)
      .put(this.controller.updateHorarioDisponible)
      .delete(this.controller.deleteHorarioDisponible);
  }
}

export { HorarioDisponibleRoutes };
