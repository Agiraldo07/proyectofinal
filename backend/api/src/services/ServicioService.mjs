import { Db } from "../config/db.mjs";
import { Servicio } from "../models/Servicio.mjs";

class ServicioService {
  getAll = async () => {
    try {
      console.log("getAll en ServicioService");
      const resultados = await new Db().selectQuery("SELECT * FROM servicio");
      return resultados.rows.map((element) => Servicio.fromObject(element));
    } catch (error) {
      console.log("error al listar servicios", error);
    }
  };

  createServicio = async (nombre, descripcion, precio, duracion_minutos) => {
    try {
      const newServicio = await new Db().selectQuery(
        "INSERT INTO servicio (nombre, descripcion, precio, duracion_minutos) VALUES ($1, $2, $3, $4) RETURNING *",
        [nombre, descripcion, precio, duracion_minutos]
      );
      if (newServicio.rows.length > 0) {
        return Servicio.fromObject(newServicio.rows[0]);
      }
      return null;
    } catch (error) {
      console.log("error al crear servicio", error);
    }
  };

  updateServicio = async (servicio_id, nombre, descripcion, precio, duracion_minutos) => {
    try {
      const updated = await new Db().selectQuery(
        "UPDATE servicio SET nombre=$1, descripcion=$2, precio=$3, duracion_minutos=$4 WHERE servicio_id = $5 RETURNING *",
        [nombre, descripcion, precio, duracion_minutos, servicio_id]
      );
      if (updated.rows.length > 0) return Servicio.fromObject(updated.rows[0]);
      return null;
    } catch (error) {
      console.log("error al actualizar servicio", error);
    }
  };

  deleteServicio = async (servicio_id) => {
    try {
      await new Db().selectQuery(
        "DELETE FROM servicio WHERE servicio_id = $1 RETURNING *",
        [servicio_id]
      );
    } catch (error) {
      console.log("error al eliminar servicio", error);
    }
  };

  getOne = async (servicio_id) => {
    try {
      const results = await new Db().selectQuery(
        "SELECT * FROM servicio WHERE servicio_id = $1",
        [servicio_id]
      );
      return Servicio.fromObject(results.rows[0]);
    } catch (error) {
      console.log("error al obtener servicio", error);
    }
  };
}

export { ServicioService };
