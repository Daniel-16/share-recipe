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
  const recipeOwnerId = req.user._id;
  try {
    const user = await UserModel.findById(recipeOwnerId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
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

/**
 * Retrieves all recipes from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A JSON response containing an array of recipes.
 */
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.find().sort({ createdAt: -1 });
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

/**
 * Handles upvoting or removing upvote for a recipe.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Object} A JSON response indicating success or failure.
 */
export const upVoteRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user._id;

  try {
    const recipe = await RecipeModel.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "Recipe not found",
      });
    }
    const alreadyVoted = recipe.upvotes.includes(userId);
    if (alreadyVoted) {
      await RecipeModel.findByIdAndUpdate(
        recipe,
        { $pull: { upvotes: userId } },
        { new: true }
      );
      return res.status(200).json({
        success: true,
        message: "Since you upvoted, you have removed your vote",
      });
    }

    recipe.upvotes.push(userId);
    await recipe.save();
    res.status(200).json({
      success: true,
      // votedUsers: updateRecipe,
      votes: "Upvoted this recipe",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getRecipeVotes = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const upvotes = await RecipeModel.findById(recipeId);
    if (!upvotes) {
      return res.status(404).json({
        success: false,
        error: "Could not find recipe",
      });
    }
    res.status(200).json({
      success: true,
      votes: upvotes.upvotes.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
