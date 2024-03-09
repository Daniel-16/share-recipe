import UserModel from "../models/UserModel.js";
// import RecipeModel from "../models/RecipeModel.js";

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
