import RecipeModel from "../models/RecipeModel.js";

export const createRecipe = async (req, res) => {
  const { title, imageUrl, timeFrame, steps } = req.body;
  try {
    const recipe = await RecipeModel.create({
      title,
      imageUrl,
      timeFrame,
      steps,
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
