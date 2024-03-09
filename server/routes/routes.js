import express from "express";
import { createUser } from "../controllers/UserController.js";
import { createRecipe } from "../controllers/RecipeController.js";
const router = express.Router();

router.post("/signup", createUser);
router.post("/createRecipe/:recipeOwnerId", createRecipe);

export default router;
