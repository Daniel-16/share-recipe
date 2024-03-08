import UserModel from "../models/UserModel.js";
import RecipeModel from "../models/RecipeModel.js";

export const createUser = async (req, res) => {
  const { username, email, password, recipes } = req.body;
  try {
    const user = await UserModel.create({
      username,
      email,
      password,
    });
    const recipe = await RecipeModel.create({
      recipeOwnerId: user._id,
      recipeOwner: user.username,
      ...recipes,
    });
    res.status(201).json({
      success: true,
      user,
      recipe,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
