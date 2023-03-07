DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS repos;
DROP TABLE IF EXISTS users;



CREATE TABLE companies (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(100),
  creator_id INT NOT NULL,
  modified_date datetime DEFAULT CURRENT_TIMESTAMP, 
  created_date datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (creator_id) REFERENCES users(id)
);


CREATE TABLE repos (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  repo_name VARCHAR(100),
  team_name VARCHAR(100),
  technology VARCHAR(100),
  company_id INT NOT NULL,
  creator_id INT NOT NULL,
  modified_date datetime DEFAULT CURRENT_TIMESTAMP, 
  created_date datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (company_id) REFERENCES companies(id),
  FOREIGN KEY (creator_id) REFERENCES users(id)
)

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL
);


-- user1 has password pass1 (etc)
INSERT INTO `users` (username, password, email)
VALUES 
    ('user1','$2b$12$eFzMWbS9SogNtxkmo3J7aO8FQMFQSKbtpwLMIOVsF6GGKpTQdgq.W','user1@acme.com'),
    ('user2','$2b$12$WZcGPyrkCvD5e8m0Qz/nFOdBryUcsp6uDlE2MDo/AjuBhPrQBCfI6','user2@acme.com'),
    ('user3','$2b$12$tiAz4eaXlpU.CdltUVvw6udLA2BWsitk5zXM2XOm2IpAeAiFfMCdy','user3@acme.com');

INSERT INTO `companies` (company_name, creator_id)
VALUES 
    ('Amazon','3'),
    ('Microsoft','2'),
    ('Walmart','1');

INSERT INTO `repos` (repo_name, team_name,technology, company_id, creator_id)
VALUES 
    ('Repo 1','Team 1', 'Javascript', 2, 2),
    ('Repo 2','Team 2', 'Javascript', 2, 2),
    ('Repo 1','Team 3', 'Typescript', 1, 1),

