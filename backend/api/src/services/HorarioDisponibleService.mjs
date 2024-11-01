import { Db } from "../config/db.mjs";
import { HorarioDisponible } from "../models/HorarioDisponible.mjs";

class HorarioDisponibleService {
  getAll = async () => {
    try {
      console.log("getAll en HorarioDisponibleService");
      const resultados = await new Db().selectQuery("SELECT * FROM horario_disponible");
      return resultados.rows.map((element) => HorarioDisponible.fromObject(element));
    } catch (error) {
      console.log("error al listar horarios disponibles", error);
    }
  };

  createHorarioDisponible = async (usuario_id, fecha, hora_inicio, hora_fin, disponible) => {
    try {
      const newHorario = await new Db().selectQuery(
        "INSERT INTO horario_disponible (usuario_id, fecha, hora_inicio, hora_fin, disponible) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [usuario_id, fecha, hora_inicio, hora_fin, disponible]
      );
      if (newHorario.rows.length > 0) {
        return HorarioDisponible.fromObject(newHorario.rows[0]);
      }
      return null;
    } catch (error) {
      console.log("error al crear horario disponible", error);
    }
  };

  updateHorarioDisponible = async (horario_id, fecha, hora_inicio, hora_fin, disponible) => {
    try {
      const updated = await new Db().selectQuery(
        "UPDATE horario_disponible SET fecha=$1, hora_inicio=$2, hora_fin=$3, disponible=$4 WHERE horario_id = $5 RETURNING *",
        [fecha, hora_inicio, hora_fin, disponible, horario_id]
      );
      if (updated.rows.length > 0) return HorarioDisponible.fromObject(updated.rows[0]);
      return null;
    } catch (error) {
      console.log("error al actualizar horario disponible", error);
    }
  };

  deleteHorarioDisponible = async (horario_id) => {
    try {
      await new Db().selectQuery(
        "DELETE FROM horario_disponible WHERE horario_id = $1 RETURNING *",
        [horario_id]
      );
    } catch (error) {
      console.log("error al eliminar horario disponible", error);
    }
  };

  getOne = async (horario_id) => {
    try {
      const results = await new Db().selectQuery(
        "SELECT * FROM horario_disponible WHERE horario_id = $1",
        [horario_id]
      );
      return HorarioDisponible.fromObject(results.rows[0]);
    } catch (error) {
      console.log("error al obtener horario disponible", error);
    }
  };
}

export { HorarioDisponibleService };
