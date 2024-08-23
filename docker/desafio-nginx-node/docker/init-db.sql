USE desafio_node;

CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO
    people (name)
VALUES
  ('Alice'),
  ('Bob'),
  ('Charlie');
