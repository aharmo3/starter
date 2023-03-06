DROP TABLE IF EXISTS company;

CREATE TABLE company (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(100),
  modified_date datetime DEFAULT CURRENT_TIMESTAMP, 
  created_date datetime DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE IF EXISTS repo;

CREATE TABLE repo (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  repo_name VARCHAR(100),
  team_name VARCHAR(100),
  technology VARCHAR(100),
  company_id INT NOT NULL,
  modified_date datetime DEFAULT CURRENT_TIMESTAMP, 
  created_date datetime DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (company_id) REFERENCES company(id)
)