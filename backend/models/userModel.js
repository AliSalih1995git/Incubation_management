const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String, required: [true, "Email is required"],
    unique: true
  },
  password: { type: String,
  required:[true,"Password is required"] }
})

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  console.log(email);
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const userModel = mongoose.model("users", userSchema)
module.exports = userModel;