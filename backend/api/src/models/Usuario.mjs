// Usuario.mjs
class Usuario {
    constructor(id, nombre, apellido, email, password, telefono, rol) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.telefono = telefono;
      this.rol = rol; // Valores posibles: 'cliente', 'administrador', 'otro'
    }
  }
  
  export { Usuario };
  