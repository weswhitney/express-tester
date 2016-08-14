DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;

\c blog;

CREATE TABLE posts (
    ID SERIAL PRIMARY KEY,
    title VARCHAR,
    body VARCHAR
);

INSERT INTO posts (title, body)
    VALUES ('firsties', 'noice ness all around');

