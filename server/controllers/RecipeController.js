import RecipeModel from "../models/RecipeModel.js";
import UserModel from "../models/UserModel.js";

export const createRecipe = async (req, res) => {
  const { title, imageUrl, timeFrame, instructions } = req.body;
  const { recipeOwnerId } = req.params;
  try {
    const user = await UserModel.findById(recipeOwnerId);
    const recipe = await RecipeModel.create({
      recipeOwnerId: user._id,
      recipeOwner: user.username,
      title,
      imageUrl,
      timeFrame,
      instructions,
    });
    res.status(201).json({
      success: true,
      recipe,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
