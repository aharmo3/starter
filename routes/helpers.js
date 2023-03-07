module.exports = {
  addRepo: (repo, guid) => {
    return `INSERT INTO repos(repo_name, team_name,technology, company_id, repo_score) VALUES ('${repo.repo_name}','${repo.team_name}', '${repo.technology}','${guid}', null) `;
  },
  getAllRepos: () => `SELECT * from repos`,
  getAllCompanies: () => `SELECT * from companies`,
  getRepoById: (id) => `SELECT * from repos WHERE company_id = ${id}`,
  addCompany: (name) =>
    `INSERT INTO companies(company_name, company_score) VALUES ('${name}', null)`,
  getCompanyByName: (name) =>
    `SELECT * from companies WHERE company_name = '${name}'`,
  getCompanyById: (id) => `SELECT * FROM companies WHERE id = ${id}`,
  addUser: (username, hashedPassword, email) => {
    return `INSERT INTO users (username, password, email) VALUES ('${username}', '${hashedPassword}', '${email}')`;
  },
  getAllUsers: () => `SELECT * FROM users ORDER BY username`,
  getUserByUsername: (username) =>
    `SELECT * FROM users WHERE username = '${username}'`,
  getUserById: (id) => `SELECT * FROM users WHERE id=${id}`,
};
