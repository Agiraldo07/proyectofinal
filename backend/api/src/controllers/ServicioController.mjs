import { ServicioService } from "../services/ServicioService.mjs";

class ServicioController {
  #service;
  constructor() {
    this.#service = new ServicioService();
  }

  getAll = async (req, res) => {
    const list = await this.#service.getAll();
    res.send(list);
  };

  createServicio = async (req, res) => {
    const { nombre, descripcion, precio, duracion_minutos } = req.body;
    if (!nombre || !precio || !duracion_minutos) {
      return res.status(401).send("Datos inválidos");
    }
    const created = await this.#service.createServicio(nombre, descripcion, precio, duracion_minutos);
    if (created == null) res.status(500).send("Error");
    else res.status(201).send(created);
  };

  updateServicio = async (req, res) => {
    const { servicio_id } = req.params;
    const { nombre, descripcion, precio, duracion_minutos } = req.body;
    const updated = await this.#service.updateServicio(servicio_id, nombre, descripcion, precio, duracion_minutos);
    res.status(200).send(updated);
  };

  deleteServicio = async (req, res) => {
    const { servicio_id } = req.params;
    const deleted = await this.#service.deleteServicio(servicio_id);
    res.status(204).send(deleted);
  };
}

export { ServicioController };
