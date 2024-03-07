import UserModel from "../models/UserModel.js";

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await UserModel.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
