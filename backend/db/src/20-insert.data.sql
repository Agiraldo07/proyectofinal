-- Inserción de datos de ejemplo en USUARIO
INSERT INTO USUARIO (nombre, apellido, email, password, telefono, rol) VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'password123', '555-1234', 'cliente'),
('Ana', 'Gómez', 'ana.gomez@example.com', 'password456', '555-5678', 'cliente'),
('Luis', 'Martínez', 'luis.martinez@example.com', 'password789', '555-8765', 'administrador'),
('María', 'Rodríguez', 'maria.rodriguez@example.com', 'password101', '555-2345', 'cliente'),
('Carlos', 'Sánchez', 'carlos.sanchez@example.com', 'password102', '555-6789', 'cliente'),
('Laura', 'Hernández', 'laura.hernandez@example.com', 'password103', '555-3456', 'administrador'),
('Sofía', 'Lopez', 'sofia.lopez@example.com', 'password104', '555-9876', 'cliente'),
('Pedro', 'García', 'pedro.garcia@example.com', 'password105', '555-4321', 'cliente'),
('Clara', 'Mendoza', 'clara.mendoza@example.com', 'password106', '555-6543', 'cliente'),
('Daniel', 'Cruz', 'daniel.cruz@example.com', 'password107', '555-7890', 'cliente'),
('Valentina', 'Reyes', 'valentina.reyes@example.com', 'password108', '555-1235', 'cliente'),
('Andrés', 'Vásquez', 'andres.vasquez@example.com', 'password109', '555-5679', 'cliente'),
('Natalia', 'Ortega', 'natalia.ortega@example.com', 'password110', '555-8766', 'cliente'),
('Javier', 'Castillo', 'javier.castillo@example.com', 'password111', '555-2346', 'cliente'),
('Isabella', 'Pineda', 'isabella.pineda@example.com', 'password112', '555-6780', 'cliente');

-- Inserción de datos de ejemplo en SERVICIO
INSERT INTO SERVICIO (nombre, descripcion, precio, duracion_minutos) VALUES
('Corte de uñas', 'Corte y limado de uñas', 10.00, 15),
('Esmaltado simple', 'Aplicación de esmalte en las uñas', 12.00, 30),
('Esmaltado gel', 'Esmalte de gel para mayor duración', 25.00, 45),
('Manicura completa', 'Incluye corte, limado y esmaltado', 30.00, 60),
('Pedicura', 'Cuidado de pies y esmaltado', 35.00, 75),
('Uñas acrílicas', 'Aplicación de uñas acrílicas', 50.00, 90),
('Decoración de uñas', 'Diseños personalizados en las uñas', 20.00, 30),
('Tratamiento de uñas', 'Fortalecimiento y cuidado de uñas', 15.00, 30),
('Esmaltado semi-permanente', 'Esmalte que dura más tiempo', 30.00, 40),
('Manicura francesa', 'Estilo clásico de manicura', 28.00, 50),
('Exfoliación de manos', 'Exfoliación para suavizar manos', 12.00, 20),
('Masaje de manos', 'Masaje relajante para manos', 15.00, 25),
('Esmalte con brillantes', 'Esmaltado con brillo extra', 20.00, 35),
('Tratamiento de cutículas', 'Cuidado y tratamiento de cutículas', 10.00, 20),
('Paquete de uñas y pies', 'Manicura y pedicura en un solo paquete', 60.00, 120);

-- Inserción de datos de ejemplo en HORARIO_DISPONIBLE
INSERT INTO HORARIO_DISPONIBLE (usuario_id, fecha, hora_inicio, hora_fin, disponible) VALUES
(6, '2024-11-01', '09:00', '10:00', TRUE),
(6, '2024-11-01', '10:00', '11:00', TRUE),
(6, '2024-11-01', '11:00', '12:00', TRUE),
(6, '2024-11-01', '12:00', '13:00', TRUE),
(6, '2024-11-01', '14:00', '15:00', TRUE),
(6, '2024-11-01', '15:00', '16:00', TRUE),
(6, '2024-11-02', '09:00', '10:00', TRUE),
(6, '2024-11-02', '10:00', '11:00', TRUE),
(6, '2024-11-02', '11:00', '12:00', TRUE),
(6, '2024-11-02', '12:00', '13:00', TRUE),
(6, '2024-11-02', '14:00', '15:00', TRUE),
(6, '2024-11-02', '15:00', '16:00', TRUE),
(6, '2024-11-03', '09:00', '10:00', TRUE),
(6, '2024-11-03', '10:00', '11:00', TRUE),
(6, '2024-11-03', '11:00', '12:00', TRUE);

-- Inserción de datos de ejemplo en CITA
INSERT INTO CITA (cliente_id, servicio_id, horario_id, fecha_hora, estado, notas) VALUES
(1, 1, 1, '2024-11-01 09:30', 'confirmada', 'Cliente llega a tiempo'),
(2, 2, 2, '2024-11-01 10:30', 'pendiente', 'Primera cita de esmaltado'),
(3, 3, 3, '2024-11-01 11:30', 'confirmada', 'Esmaltado de gel'),
(4, 4, 4, '2024-11-02 14:30', 'cancelada', 'No puede asistir'),
(5, 5, 5, '2024-11-02 15:30', 'confirmada', 'Cita de pedicura'),
(1, 6, 6, '2024-11-03 09:30', 'pendiente', 'Uñas acrílicas'),
(6, 1, 7, '2024-11-03 10:00', 'confirmada', 'Corte de uñas'),
(7, 2, 8, '2024-11-03 11:00', 'pendiente', 'Esmaltado simple'),
(8, 3, 9, '2024-11-03 12:00', 'confirmada', 'Esmaltado gel'),
(9, 4, 10, '2024-11-04 14:00', 'confirmada', 'Manicura completa'),
(10, 5, 11, '2024-11-04 15:00', 'pendiente', 'Pedicura'),
(11, 6, 12, '2024-11-04 16:00', 'cancelada', 'Uñas acrílicas'),
(12, 1, 13, '2024-11-05 09:00', 'confirmada', 'Corte de uñas'),
(13, 2, 14, '2024-11-05 10:00', 'pendiente', 'Esmaltado simple'),
(14, 3, 15, '2024-11-05 11:00', 'confirmada', 'Esmaltado gel');