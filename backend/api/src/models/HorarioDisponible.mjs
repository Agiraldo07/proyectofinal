// HorarioDisponible.mjs
import { Usuario } from "./Usuario.mjs";

class HorarioDisponible {
  constructor(id, usuario, fecha, horaInicio, horaFin, disponible = true) {
    this.id = id;
    this.usuario = usuario instanceof Usuario ? usuario : null; // Referencia a un usuario/profesional
    this.fecha = fecha;
    this.horaInicio = horaInicio;
    this.horaFin = horaFin;
    this.disponible = disponible;
  }

  setUsuario(usuario) {
    if (!(usuario instanceof Usuario)) {
      throw new Error("Debe ser un objeto de la clase Usuario");
    }
    this.usuario = usuario;
  }
}

export { HorarioDisponible };
