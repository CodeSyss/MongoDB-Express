const { Router } = require("express");

const {
  renderLogin,
  signUp,
  renderSignUpForm,
  renderSignInform,
  signIn,
  logout,
} = require("../controllers/users.controller");

const router = Router();

//Sign up
router.get("/users/signup", renderSignUpForm);
router.post("/users/signup", signUp);

//Login
router.get("/users/signin", renderSignInform);
router.post("/users/signin", signIn);

// go out 
router.get("/users/logout", logout);

module.exports = router;
