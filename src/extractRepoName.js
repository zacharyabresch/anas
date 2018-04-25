const extractRepoName = repository => {
  const splitsies = repository.split("/");
  const name = splitsies[splitsies.length - 1].replace(/\.git$/, "");
  return name;
};

module.exports = extractRepoName;
