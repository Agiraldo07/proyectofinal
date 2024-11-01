import { CitaService } from "../services/CitaService.mjs";

class CitaController {
  #service;
  constructor() {
    this.#service = new CitaService();
  }

  getAll = async (req, res) => {
    const list = await this.#service.getAll();
    res.send(list);
  };

  createCita = async (req, res) => {
    const { cliente_id, servicio_id, horario_id, fecha_hora, estado, notas } = req.body;
    if (!cliente_id || !servicio_id || !horario_id || !fecha_hora) {
      return res.status(401).send("Datos inválidos");
    }
    const created = await this.#service.createCita(cliente_id, servicio_id, horario_id, fecha_hora, estado, notas);
    if (created == null) res.status(500).send("Error");
    else res.status(201).send(created);
  };

  updateCita = async (req, res) => {
    const { cita_id } = req.params;
    const { estado, notas } = req.body;
    const updated = await this.#service.updateCita(cita_id, estado, notas);
    res.status(200).send(updated);
  };

  deleteCita = async (req, res) => {
    const { cita_id } = req.params;
    const deleted = await this.#service.deleteCita(cita_id);
    res.status(204).send(deleted);
  };
}

export { CitaController };
