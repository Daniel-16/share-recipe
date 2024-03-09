import mongoose from "mongoose";
const RecipeSchema = new mongoose.Schema({
  recipeOwnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  recipeOwner: {
    type: mongoose.Schema.Types.String,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  timeFrame: {
    type: Number,
    required: true,
  },
  instructions: [
    {
      type: String,
      required: true,
    },
  ],
});

const RecipeModel = mongoose.model("Recipe", RecipeSchema);
export default RecipeModel;
