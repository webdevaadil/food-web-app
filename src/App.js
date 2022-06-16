import React, { useState, useEffect } from 'react';
import './App.css';
import { Head } from './edamam/Head';
import { Card } from './edamam/Card';
import axios from 'axios';

function App() {
  const apiid = "2d6103a6";
  const apikey = "d419ff205f3a7d235acd408aac8b034d";
  const [inputvalue, setinputvalue] = useState("mango");
  const [recipedata, setrecipedata] = useState([])
  const inputChangeValue = (event) => {
    setinputvalue(event.target.value);
  }
  const getrecipe = async () => {
    const url = `https://api.edamam.com/search?q=${inputvalue}&app_id=${apiid}&app_key=${apikey}`
    const recipe = await axios.get(url).then((res) => {
      return res.data.hits;
    });
    setrecipedata(recipe)
  }
  console.log(recipedata)
  
  // useEffect(() => {
  //  getrecipe();
  // }, [])
  useEffect(() => {
    getrecipe();
  }, [])

  console.log(inputvalue);
  return (
    <>
      <Head inputChangeValue={inputChangeValue} inputvalue={inputvalue} />
      <Card recipedata={recipedata} />
    </>
  );
}

export default App;
