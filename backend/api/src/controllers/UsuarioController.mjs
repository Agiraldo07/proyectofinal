import { UsuarioService } from "../services/UsuarioService.mjs";

class UsuarioController {
  #service;
  constructor() {
    this.#service = new UsuarioService();
  }

  getAll = async (req, res) => {
    const list = await this.#service.getAll();
    res.send(list);
  };

  createUsuario = async (req, res) => {
    const { nombre, apellido, email, password, telefono, rol } = req.body;
    if (!nombre || !apellido || !email || !password || !rol) {
      return res.status(401).send("Datos inválidos");
    }
    const created = await this.#service.createUsuario(nombre, apellido, email, password, telefono, rol);
    if (created == null) res.status(500).send("Error");
    else res.status(201).send(created);
  };

  updateUsuario = async (req, res) => {
    const { usuario_id } = req.params;
    const { nombre, apellido, email, password, telefono, rol } = req.body;
    const updated = await this.#service.updateUsuario(usuario_id, nombre, apellido, email, password, telefono, rol);
    res.status(200).send(updated);
  };

  deleteUsuario = async (req, res) => {
    const { usuario_id } = req.params;
    const deleted = await this.#service.deleteUsuario(usuario_id);
    res.status(204).send(deleted);
  };
}

export { UsuarioController };
