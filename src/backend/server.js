const express = require('express')
const app = express()
const path = require("path")

const methodOverride = require("method-override")
app.use(methodOverride('_method'));
app.use(express.json());
const bodyParser = require('body-parser')


//import mongoose
const mongoose = require('mongoose')
const recipe = require('./model/recipe')

//connection created
mongoose.connect("mongodb://127.0.0.1:27017/recipe")

//Adding Recipe
app.post('/addrecipe',(req,res)=>{
  console.log(req.body)
  const newRecipe = new recipe(req.body)
  newRecipe.save().then(()=>{
    res.redirect('/recipe');
  }).catch(()=>{
    console.log(err)
  })
  
  
})


//Reading / Viewing Recipes
app.get("/recipe", async (req, res) => {
  const recipes = await recipes.find()
  res.render("recipe",{title:"recipe lists",recipe:recipes});
});
app.listen(3002,()=>{
  console.log("server running")
})


// Deleting Recipe
 app.delete('/recipe/:id', async (req, res) => {
 console.log("Deleting Recipe");
 try {
    const recipeId = req.params.id;
     await recipe.findByIdAndRemove(recipeId);
     console.log(recipeId);
     res.redirect('/recipe');
   } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
   }
 });

 const productRouter = require("./routes/productroutes")
 app.use("/",recipeRoutes)