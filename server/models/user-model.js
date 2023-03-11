const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchem = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1024,
  },
  role: {
    type: String,
    enum: ["學生", "教師"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchem.methods.isStudent = function () {
  return this.role == "學生"; //result: T or F
};

userSchem.methods.isIntructor = function () {
  return this.role == "教師"; //result: T or F
};

userSchem.methods.isAdmin = function () {
  return this.role == "開發者"; //result: T or F
};

//mongoose schema middleware
userSchem.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } else {
    return next();
  }
});

userSchem.methods.comparePassword = function (password, cb) {
  //cb -> callback
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err, isMatch);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchem);
