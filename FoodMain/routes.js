const axios = require('axios');
const express = require('express');
const { BadRequestError } = require('./expressError');
const router = new express.Router();

require('dotenv').config()
const API_KEY = process.env.API_KEY;

//GET route. Receives ingredient as a request param from frontend. Calls spoonacular API with ingredient. Returns result data as json array

router.get('/get-results/:ingredient', async (request, response, next) => {
    try {
        const ingredient = request.params.ingredient;
        let result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredient}`);
        console.log(result.data);
        response.status(200).json(result.data);
    } catch(error) {
        console.log(error);
        throw new BadRequestError(message= 'There was an error. Please try again.')
    }
})

//GET route. Receives id as a param from frontend. Calls spoonacular API with id. Returns result data as json object

router.get('/get-info/:id', async (request, response, next) => {
    try {
        const id = request.params.id;
        let result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        console.log(result.data);
        response.status(200).json(result.data);
    } catch(error) {
        console.log(error);
        throw new BadRequestError(message= 'There was an error. Please try again.')
    }
})


module.exports = router;