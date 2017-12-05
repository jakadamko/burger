### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR  (255) NOT NULL,
        sleepy BOOLEAN NOT NULL,
        date  TIMESTAMP,
        PRIMARY KEY(id)
);
