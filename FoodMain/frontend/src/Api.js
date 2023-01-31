//Function for calling backend GET route. returns result data

//Frontend API logic

import axios from 'axios';

//This function calls the backend and retreives a list of recipes based on user ingredient input 

async function getRecipes(ingredient) {
    try {
        const headers = {
            "Content-Type": "application/json",
          };
        let result = await axios.get(`http://localhost:3001/get-results/${ingredient}`, { headers });
        //localStorage.setItem('result', JSON.stringify(result.data));
        return result.data;
    } catch(err) {
        console.error('FRONTEND API ERROR: getRecipes', err.response);
    };
};

//This function calls the backend and retreives data for an individual recipe based on id from params

async function getMoreInfo(id) {
    try {
        const headers = {
            "Content-Type": "application/json",
          };
        let result = await axios.get(`http://localhost:3001/get-info/${id}`, { headers });
        return result.data;
    } catch(err) {
        console.error('FRONTEND API ERROR: getMoreInfo', err.response);
    }
}

export {getRecipes, getMoreInfo};