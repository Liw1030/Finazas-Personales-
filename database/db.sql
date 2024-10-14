CREATE DATABASE CrudfinanzasPersonales;
---Creación de la base de datos

--Usar la base de datos
USE CrudfinanzasPersonales;



CREATE TABLE objetivos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    mes VARCHAR(20) NOT NULL,
    anio INT NOT NULL,
    porcentaje_necesidades DECIMAL(5, 2) NOT NULL DEFAULT 50.00,
    porcentaje_deseos DECIMAL(5, 2) NOT NULL DEFAULT 30.00,
    porcentaje_ahorros DECIMAL(5, 2) NOT NULL DEFAULT 20.00,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE gastos_fijos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    nombre_gasto VARCHAR(100) NOT NULL,
    cantidad DECIMAL(10, 2) NOT NULL,
    fecha DATE NOT NULL,
    categoria ENUM('necesidad', 'deseo', 'ahorro') NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);



CREATE TABLE gastos_variables (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    nombre_gasto VARCHAR(100) NOT NULL,
    cantidad DECIMAL(10, 2) NOT NULL,
    fecha DATE NOT NULL,
    categoria ENUM('necesidad', 'deseo', 'ahorro') NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);



--Ver las tablas 
SHOW TABLES;
--describir las tablas
DESCRIBE usuarios;
