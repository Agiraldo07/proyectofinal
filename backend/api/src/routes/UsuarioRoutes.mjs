import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController.mjs";

class UsuarioRoutes {
  constructor() {
    this.router = Router();
    this.controller = new UsuarioController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(this.controller.createUsuario);
    this.router
      .route("/:usuario_id")
      .get(this.controller.getOne)
      .put(this.controller.updateUsuario)
      .delete(this.controller.deleteUsuario);
  }
}

export { UsuarioRoutes };