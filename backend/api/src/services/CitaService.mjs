import { Db } from "../config/db.mjs";
import { Cita } from "../models/Cita.mjs";

class CitaService {
  getAll = async () => {
    try {
      console.log("getAll en CitaService");
      const resultados = await new Db().selectQuery("SELECT * FROM cita");
      return resultados.rows.map((element) => Cita.fromObject(element));
    } catch (error) {
      console.log("error al listar citas", error);
    }
  };

  createCita = async (cliente_id, servicio_id, horario_id, fecha_hora, estado, notas) => {
    try {
      const newCita = await new Db().selectQuery(
        "INSERT INTO cita (cliente_id, servicio_id, horario_id, fecha_hora, estado, notas) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [cliente_id, servicio_id, horario_id, fecha_hora, estado, notas]
      );
      if (newCita.rows.length > 0) {
        return Cita.fromObject(newCita.rows[0]);
      }
      return null;
    } catch (error) {
      console.log("error al crear cita", error);
    }
  };

  updateCita = async (cita_id, estado, notas) => {
    try {
      const updated = await new Db().selectQuery(
        "UPDATE cita SET estado=$1, notas=$2 WHERE cita_id = $3 RETURNING *",
        [estado, notas, cita_id]
      );
      if (updated.rows.length > 0) return Cita.fromObject(updated.rows[0]);
      return null;
    } catch (error) {
      console.log("error al actualizar cita", error);
    }
  };

  deleteCita = async (cita_id) => {
    try {
      await new Db().selectQuery(
        "DELETE FROM cita WHERE cita_id = $1 RETURNING *",
        [cita_id]
      );
    } catch (error) {
      console.log("error al eliminar cita", error);
    }
  };

  getOne = async (cita_id) => {
    try {
      const results = await new Db().selectQuery(
        "SELECT * FROM cita WHERE cita_id = $1",
        [cita_id]
      );
      return Cita.fromObject(results.rows[0]);
    } catch (error) {
      console.log("error al obtener cita", error);
    }
  };
}

export { CitaService };