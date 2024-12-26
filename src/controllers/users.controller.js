const CrlUsers = {};
// const { text } = require("express");
const User = require("../models/User");
const passport = require("passport");

CrlUsers.renderLogin = (req, res) => {
  res.send("Rendered login");
};

CrlUsers.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};

CrlUsers.signUp = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const errors = [];
  if (password != confirm_password) {
    errors.push({ text: "No coinciden las contraseñas" });
  }
  if (password.length < 4) {
    errors.push({ text: "La contraseña tiene que ser mayor a 4 caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password, 
    });
  } else {
    const emailUser = await User.findOne({
      email: email,
    });
    if (emailUser) {
      req.flash("error_msg", "the email is already in use");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "You are registered");
      res.redirect("/users/signin");
    }
  }
};

CrlUsers.renderSignInform = (req, res) => {
  res.render("users/signin");
};

CrlUsers.signIn = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/notes",
  failureFlash: true,
});

CrlUsers.logout = (req, res) => {
  res.send("logout");
};

module.exports = CrlUsers;
