import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grommet } from 'grommet';
import './App.css';
import Results from './components/Results';
import SingleResult from './components/SingleResult';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import {getRecipes} from './Api';

//Grommet UI presets- colors, font

const theme = {
  global: {
    colors: {
      brand: '#0A0808',
      'accent-1': '#df9917',
      'neutral-1': '#f5f5f1',
      background: {
        color: "brand"
      },
      text: {
        light: 'brand',
        dark: 'neutral-1',
      },
    },
  },
};

function App() {

  //setting state variables for app

  const [ingredient, setIngredient] = useState({
    ingredient: ''
  });

  const [result, setResult] = useState({
    result: []
  });

  //function that calls an Api.js route to get recipe results
  async function foodSearch() {
    const recipes = await getRecipes(ingredient.ingredient);
    setResult({result: recipes});
  };
  
  return (
    <Grommet theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage ingredient={ingredient} setIngredient={setIngredient} handleSearch={foodSearch}/> } />
            <Route path='/results' element={<Results result={result} />} />
            <Route path='/results/:id' element={<SingleResult />} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Grommet>
  );
}

export default App;
