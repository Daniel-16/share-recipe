import express from "express";
import { createUser } from "../controllers/UserController.js";
import {
  createRecipe,
  getAllRecipes,
} from "../controllers/RecipeController.js";
const router = express.Router();

/**
 * Route for user sign-up.
 * POST /api/signup
 * @name signup
 * @memberof router
 * @function
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 */
router.post("/signup", createUser);

/**
 * Route for creating a recipe.
 * POST /api/createRecipe/:recipeOwnerId
 * @name createRecipe
 * @memberof router
 * @function
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 * @param {string} param - Recipe owner ID.
 */
router.post("/createRecipe/:recipeOwnerId", createRecipe);

/**
 * Route for getting all recipes
 * GET /api/recipes
 * @name getAllRecipes
 * @memberof Router
 * @function
 * @inner
 * @param {string} path
 * @param {callback} middleware
 */
router.get("/recipes", getAllRecipes);

export default router;
