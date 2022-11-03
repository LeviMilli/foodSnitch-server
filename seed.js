const { response } = require('express')
const   mongoose  = require('mongoose')
const RecipeModel = require("./models/Recipe.model");
const axios = require('axios')
require("dotenv/config");


// connect to the DB
require('./db/index')



  
//making the request

axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOODAPI}&number=50`)
    .then((res) => {
        res.data.results.forEach(async (recipe) => {
            let id = recipe.id
            let recipeRes = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.FOODAPI}`)

            RecipeModel.create({
                 image: recipeRes.data.image,
                 title: recipeRes.data.title,
                 ingredients: recipeRes.data.extendedIngredients,
                 summary: recipeRes.data.summary,
                 readyInMinutes: recipeRes.data.readyInMinutes,
                 dishTypes: recipeRes.data.dishTypes,
                 sourceUrl: recipeRes.data.sourceUrl,
                 makepublic: true,
                })
        })
        
        
    })

