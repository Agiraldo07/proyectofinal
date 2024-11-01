import express from "express";
import { setContentType } from "./middlewares/middleware.mjs";
import { UsuarioRoutes } from "./routes/UsuarioRoutes.mjs";
import { ServicioRoutes } from "./routes/ServicioRoutes.mjs";
import { HorarioDisponibleRoutes } from "./routes/HorarioDisponibleRoutes.mjs";
import { CitaRoutes } from "./routes/CitaRoutes.mjs";

const app = express();
app.use(express.json());
app.use(setContentType);

// Instanciar las rutas
const usuarioRoutes = new UsuarioRoutes();
const servicioRoutes = new ServicioRoutes();
const horarioDisponibleRoutes = new HorarioDisponibleRoutes();
const citaRoutes = new CitaRoutes();

// Asignar las rutas
app.use("/usuarios", usuarioRoutes.router);
app.use("/servicios", servicioRoutes.router);
app.use("/horarios-disponibles", horarioDisponibleRoutes.router);
app.use("/citas", citaRoutes.router);

// Manejo de rutas no existentes
app.all("*", (req, res) => {
  res.status(404).send(JSON.stringify({ message: "Ruta no encontrada" }));
});

// Iniciar el servidor
app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
