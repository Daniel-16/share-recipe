import express from "express";
import { createUser } from "../controllers/UserController.js";
import { createRecipe } from "../controllers/RecipeController.js";
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

export default router;
