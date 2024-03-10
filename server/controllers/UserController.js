import UserModel from "../models/UserModel.js";
// import RecipeModel from "../models/RecipeModel.js";
import bcrypt from "bcrypt";

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
    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
