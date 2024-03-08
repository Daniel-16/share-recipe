import mongoose from "mongoose";
const RecipeSchema = new mongoose.Schema({
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
  steps: {
    type: String,
    required: true,
  },
});

const RecipeModel = mongoose.model("Recipe", RecipeSchema);
export default RecipeModel;
