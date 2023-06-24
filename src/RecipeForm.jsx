import React from 'react'
import RecipeOptions from './RecipeOptions'
function RecipeForm() {

    function AddRecipe() {
        console.log("AddRecipe")
    }


    return (
    <div>
    <RecipeOptions />

    <h3>Recipe Form </h3>
    <br/>
    <form >
    <input type="text" name="title" placeholder="Recipe Title" />
    <br/>
    <input type="text" name="description" placeholder="Description" />
    <br/>
    <input type="text" name="ingredients" placeholder="Ingredients" />
    <br/>
    <input type="text" name="instructions" placeholder="Instructions" />
    <br/>
    <input type="submit" value="Attach Image" />
    <br/>
    <br/>
    
    <button type="submit" onClick={AddRecipe()}>Add Recipe</button>
    </form>
    </div>
    
    )
}

export default RecipeForm