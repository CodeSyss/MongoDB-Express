const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
//Crear las collection

// collection{
//     document
// }

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

UserSchema.methods.encrypPassword = async (password) => {
  //códogo asíncrono que se puede ejecutar despues y el progrma sigue funcionando, por eso await
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
