export const formatDate = (inputDate) => {
  const formatD = new Date(inputDate);
  let date, month, year;

  date = formatD.getDate();
  month = formatD.getMonth() + 1;
  year = formatD.getFullYear();
  return `${date}/${month}/${year}`;
};

export const transformData = (data) => {
  const { company_name, repo_name, team_name, technology, creator_id } = data;
  const formatInput = {
    company_name,
    creator_id,
    repo: [
      {
        repo_name,
        team_name,
        technology,
      },
    ],
  };
  return formatInput;
};
