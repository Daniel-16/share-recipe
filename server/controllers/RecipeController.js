import RecipeModel from "../models/RecipeModel.js";
import UserModel from "../models/UserModel.js";

/**
 * Creates a new recipe.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The created recipe.
 */
export const createRecipe = async (req, res) => {
  // Data extraction from the request body
  const { title, imageUrl, timeFrame, instructions } = req.body;
  // Extracting the recipeOwnerId from the request paramaters
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

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.find({});
    if (recipes.length > 0) {
      return res.status(201).json({
        success: true,
        recipes,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: "Recipes not found or empty",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
