const model = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Login = async (req, res) => {
  try {
    const { Email, password } = req.body;

    const user = await model.findOne({ Email });
    if (!user) {
      return { message: "No user Found" };
    }
    if (user.password == password) {
      jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Error generating token");
          }
          res.cookie("token", token, { httpOnly: true, secure: true });
          res.status(200).json({ message: "Authentication successful", token });
        }
      );
    }

    if (user.password != password) {
      return { message: "invalid password" };
    }
  } catch (error) {
    return { message: error };
  }
};

const validateToken = (req, res) => {
  const token = req.body.token;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.send({Status:true});
  } catch (error) {
    res.send({Status:false});
  }
};

const authCon = { Login, validateToken };
module.exports = authCon;
