const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true, // when the schema is creaated and updated timestamp
  }
);

// will encrypt password everytime its saved

// pre is before saving the data we ar going to call fun[middleware]

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  // if modified we are going to generate salt asyncronusly
  const salt = await bcrypt.genSalt(10);

  //this is for encryption
  this.password = await bcrypt.hash(this.password, salt);
});

// used to decrypt the password
userSchema.methods.matchPassword = async function (enteredPassword) {
  // the pass will be compared between the database and enterd password
  return await bcrypt.compare(enteredPassword, this.password);
};

//we are creating the
const User = mongoose.model("User", userSchema);

module.exports = User;
