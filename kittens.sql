DROP DATABASE IF EXISTS kittens;
CREATE DATABASE kittens;

\c kittens;

CREATE TABLE kitties (
    ID SERIAL PRIMARY KEY,
    name VARCHAR,
    breed VARCHAR,
    age INTEGER,
    sex VARCHAR
);

INSERT INTO kitties (name, breed, age, sex)
    VALUES ('Snowball', 'presian', 11, 'F');
