import { HorarioDisponibleService } from "../services/HorarioDisponibleService.mjs";

class HorarioDisponibleController {
  #service;
  constructor() {
    this.#service = new HorarioDisponibleService();
  }

  getAll = async (req, res) => {
    const list = await this.#service.getAll();
    res.send(list);
  };

  createHorarioDisponible = async (req, res) => {
    const { usuario_id, fecha, hora_inicio, hora_fin, disponible } = req.body;
    if (!usuario_id || !fecha || !hora_inicio || !hora_fin) {
      return res.status(401).send("Datos inválidos");
    }
    const created = await this.#service.createHorarioDisponible(usuario_id, fecha, hora_inicio, hora_fin, disponible);
    if (created == null) res.status(500).send("Error");
    else res.status(201).send(created);
  };

  updateHorarioDisponible = async (req, res) => {
    const { horario_id } = req.params;
    const { fecha, hora_inicio, hora_fin, disponible } = req.body;
    const updated = await this.#service.updateHorarioDisponible(horario_id, fecha, hora_inicio, hora_fin, disponible);
    res.status(200).send(updated);
  };

  deleteHorarioDisponible = async (req, res) => {
    const { horario_id } = req.params;
    const deleted = await this.#service.deleteHorarioDisponible(horario_id);
    res.status(204).send(deleted);
  };
}

export { HorarioDisponibleController };
