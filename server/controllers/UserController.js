import UserModel from "../models/UserModel.js";
// import RecipeModel from "../models/RecipeModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

/**
 * Creates a new user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The created user.
 */
export const createUser = async (req, res) => {
  // Data from the request body
  const { username, email, password } = req.body;
  try {
    const user = await UserModel.create({
      username,
      email,
      password,
    });
    const token = generateToken({ userId: user._id });
    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Find user from db if they exist
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Invalid email or password",
      });
    }
    //Match passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        error: "Invalid email or password",
      });
    }
    const token = generateToken({ userId: user._id });
    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
