const getCurrentUser = () => {
  const user = localStorage.getItem("tokens");
  return JSON.parse(user);
};

const header = () => {
  const user = localStorage.getItem("tokens");
  return JSON.parse(user);
};

const saveTokens = (data) => {
  localStorage.setItem("tokens", JSON.stringify(data));
};

module.exports = { saveTokens, header, getCurrentUser };
