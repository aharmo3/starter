module.exports = {
  addRepo: (repo, guid, creator_id) => {
    return `INSERT INTO repos(repo_name, team_name,technology, company_id, creator_id) VALUES ('${repo.repo_name}','${repo.team_name}', '${repo.technology}','${guid}','${creator_id}') `;
  },
  getAllRepos: () => `SELECT * from repos`,
  getAllCompanies: () => `SELECT * from companies`,
  getRepoById: (id) => `SELECT * from repos WHERE company_id = ${id}`,
  addCompany: (name, creator_id) =>
    `INSERT INTO companies(company_name, creator_id) VALUES ('${name}','${creator_id}')`,
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
