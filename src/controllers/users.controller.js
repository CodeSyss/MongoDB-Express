const CrlUsers = {};

CrlUsers.renderLogin = (req, res) => {
  res.send("Rendered login");
};

CrlUsers.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

CrlUsers.signUp = (req, res) => {
  res.send("sign up");
};

CrlUsers.renderSignInform = (req, res) => {
  res.render("users/signin");
};

CrlUsers.signIn = (req, res) => {
  res.send("sign in");
};

CrlUsers.logout = (req, res) => {
  res.send("logout");
};

module.exports = CrlUsers;
