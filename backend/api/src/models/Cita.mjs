// Cita.mjs
import { Usuario } from "./Usuario.mjs";
import { Servicio } from "./Servicio.mjs";
import { HorarioDisponible } from "./HorarioDisponible.mjs";

class Cita {
  constructor(id, cliente, servicio, horario, fechaHora, estado, notas = "") {
    this.id = id;
    this.cliente = cliente instanceof Usuario ? cliente : null; // Cliente registrado
    this.servicio = servicio instanceof Servicio ? servicio : null; // Servicio asociado
    this.horario = horario instanceof HorarioDisponible ? horario : null; // Horario reservado
    this.fechaHora = fechaHora;
    this.estado = estado; // Estados posibles: 'pendiente', 'confirmada', 'cancelada', 'completada'
    this.notas = notas;
  }

  setCliente(cliente) {
    if (!(cliente instanceof Usuario)) {
      throw new Error("Debe ser un objeto de la clase Usuario");
    }
    this.cliente = cliente;
  }

  setServicio(servicio) {
    if (!(servicio instanceof Servicio)) {
      throw new Error("Debe ser un objeto de la clase Servicio");
    }
    this.servicio = servicio;
  }

  setHorario(horario) {
    if (!(horario instanceof HorarioDisponible)) {
      throw new Error("Debe ser un objeto de la clase HorarioDisponible");
    }
    this.horario = horario;
  }
}

export { Cita };
