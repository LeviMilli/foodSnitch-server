const express = require('express')
const router = express.Router()



let RecipeModel = require("../models/Recipe.model")
let MyRecipeModel = require("../models/MyRecipe.model")

router.get('/recipe', (req, res) => {
    RecipeModel.find()
         .then((recipes) => {
            let publicRecipes = recipes.filter((recipe)=> {
                return recipe.makepublic
            })
              res.status(200).json(publicRecipes)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   message: err
              })
         })         
})


router.get('/myrecipe', (req, res) => {
    MyRecipeModel.find().populate("RecipeId")
         .then((recipes) => {
              res.status(200).json(recipes)
         })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   message: err
              })
         })         
})




 router.get('/recipe/:id', (req, res) => {
     RecipeModel.findById(req.params.id)
      .then((response) => {
           res.status(200).json(response)
      })
      .catch((err) => {
           res.status(500).json({
                error: 'Something went wrong',
                message: err
           })
      }) 
 })

// routes used for adding recipes to myrecipes
 router.post('/create', (req, res) => {  
     const {UserId, RecipeId} = req.body;
     
     console.log(req.body)
     MyRecipeModel.create({  
          UserId,
          RecipeId
     })
           .then((response) => {
               
               MyRecipeModel.findById(response._id).populate("RecipeId")
               .then((recipes) => {
                    res.status(200).json(recipes)
    })
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })

 //route used for creating a new recipe for myrecipes
 router.post('/create/recipe', (req, res) => {  
     const {title, image, readyInMinutes} = req.body;
     console.log(req.body)
     RecipeModel.create({title: title, readyInMinutes: readyInMinutes,  image: image})
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })


 router.delete('/myrecipe/:id', (req, res) => {
     MyRecipeModel.findByIdAndDelete(req.params.id)
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })


 router.patch('/myrecipe/:id', (req, res) => {
     let id = req.params.id
     const {title, image, readyInMinutes} = req.body;
     MyRecipeModel.findByIdAndUpdate(id.RecipeId, {$set: {title: title, image: image, readyInMinutes: readyInMinutes}}, {new: true}).populate("RecipeId")
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           }) 
 })

 //last two for getting info to edit page attempt



 router.get('/myrecipe/edit/:id', (req, res) => {  
     MyRecipeModel.findById(req.params.id).populate("RecipeId")
           .then((response) => {
                    res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })



 

module.exports = router;