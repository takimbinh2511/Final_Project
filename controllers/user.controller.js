const { User, UserSchema } = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const findAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findDetailUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // mã hóa password
    // 1. tạo ra một chuổi ngẩu nhiên

    const salt = bcryptjs.genSaltSync(10);
    // 2. mã hóa password + salt
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      email,
      password: hashPassword,
      role,
    });
    return res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({_id: id});
    res.status(200).send("Xóa thành công");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await User.update(data, {
      where: {
        id,
      },
    });
    res.status(200).send("cập nhật người dùng");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  findAllUser,
  findDetailUser,
  createUser,
  updateUser,
  removeUser
};
