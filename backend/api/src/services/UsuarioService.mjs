import { Db } from "../config/db.mjs";
import { Usuario } from "../models/Usuario.mjs";

class UsuarioService {
  getAll = async () => {
    try {
      console.log("getAll en UsuarioService");
      const resultados = await new Db().selectQuery("SELECT * FROM usuario");
      return resultados.rows.map((element) => Usuario.fromObject(element));
    } catch (error) {
      console.log("error al listar usuarios", error);
    }
  };

  createUsuario = async (nombre, apellido, email, password, telefono, rol) => {
    try {
      const newUsuario = await new Db().selectQuery(
        "INSERT INTO usuario (nombre, apellido, email, password, telefono, rol) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [nombre, apellido, email, password, telefono, rol]
      );
      if (newUsuario.rows.length > 0) {
        return Usuario.fromObject(newUsuario.rows[0]);
      }
      return null;
    } catch (error) {
      console.log("error al crear usuario", error);
    }
  };

  updateUsuario = async (usuario_id, nombre, apellido, email, password, telefono, rol) => {
    try {
      const updated = await new Db().selectQuery(
        "UPDATE usuario SET nombre=$1, apellido=$2, email=$3, password=$4, telefono=$5, rol=$6 WHERE usuario_id = $7 RETURNING *",
        [nombre, apellido, email, password, telefono, rol, usuario_id]
      );
      if (updated.rows.length > 0) return Usuario.fromObject(updated.rows[0]);
      return null;
    } catch (error) {
      console.log("error al actualizar usuario", error);
    }
  };

  deleteUsuario = async (usuario_id) => {
    try {
      await new Db().selectQuery(
        "DELETE FROM usuario WHERE usuario_id = $1 RETURNING *",
        [usuario_id]
      );
    } catch (error) {
      console.log("error al eliminar usuario", error);
    }
  };

  getOne = async (usuario_id) => {
    try {
      const results = await new Db().selectQuery(
        "SELECT * FROM usuario WHERE usuario_id = $1",
        [usuario_id]
      );
      return Usuario.fromObject(results.rows[0]);
    } catch (error) {
      console.log("error al obtener usuario", error);
    }
  };
}

export { UsuarioService };
