const {default: mongoose} = require ('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    description: String,
    ingredients: String,
    instructions: String,
});
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe; 