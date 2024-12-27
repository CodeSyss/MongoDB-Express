const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    }, //Función para auntentificar o logear user
    async (email, password, done) => {
      //Match Email's user, comprobar si coincide los correos
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: "Not User Found" });
      } else {
        //Match password's user
        const match = await user.matchPassword(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch {
    done(err);
  }
});
