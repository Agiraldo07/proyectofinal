CREATE TABLE USUARIO (
    usuario_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    telefono VARCHAR(15),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    rol VARCHAR(50) CHECK (rol IN ('cliente', 'administrador', 'otro')) -- Cambia según tus roles
);

CREATE TABLE SERVICIO (
    servicio_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    duracion_minutos INT NOT NULL
);

CREATE TABLE HORARIO_DISPONIBLE (
    horario_id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES USUARIO(usuario_id) ON DELETE CASCADE,
    fecha DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    disponible BOOLEAN DEFAULT TRUE
);

CREATE TABLE CITA (
    cita_id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES USUARIO(usuario_id) ON DELETE CASCADE,
    servicio_id INTEGER REFERENCES SERVICIO(servicio_id) ON DELETE CASCADE,
    horario_id INTEGER REFERENCES HORARIO_DISPONIBLE(horario_id) ON DELETE CASCADE,
    fecha_hora TIMESTAMP NOT NULL,
    estado VARCHAR(50) CHECK (estado IN ('pendiente', 'confirmada', 'cancelada', 'completada')), -- Cambia según tus estados
    notas TEXT
);
