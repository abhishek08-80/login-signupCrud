import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcrypt";
// import dotenv from "dotenv";

 class userService {
  async create(req, res) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const create = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      const tokenData = {
        email: create.email,
        username: create.username,
      };
      const token = jwt.sign(tokenData, process.env.SECREAT_KEY);

      return res.status(201).json({ message: 'User added successfully to Database',data: create, token: token });
      ;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async findByEmail(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json("User not found");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword) {
        return res.status(400).json("Wrong password");
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new userService();
