import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Card } from './edamam/Card'
import { Head } from './edamam/Head'


const App2 = () => {
  useEffect(() => {
    recipevar();
  }, []);

  const [inputvalue, setInputvalue] = useState("mango")
  const [Submitdata, setSubmitdata] = useState("")
  const [recipedata, setRecipedata] = useState([]);
  
  
  const inputChangeValue = (e) => {
    setInputvalue(e.target.value);
  }


  const apiid = "2d6103a6";
  const apikey = "d419ff205f3a7d235acd408aac8b034d";
  const recipevar = async () => {
    const url = `https://api.edamam.com/search?q=${inputvalue}&app_id=${apiid}&app_key=${apikey}`;
    const recipe = await axios.get(url).then((res) => {
      return res.data.hits;
    });
    setRecipedata(recipe);
  }




const sub =(e)=>{
  e.preventDefault();
  recipevar();
// inputChangeValue()
// recipe()
}


  // console.log(inputvalue);
 
  console.log(recipedata);
 

  return (
    <div>
      <Head inputChangeValue={inputChangeValue} sub={sub} inputvalue={inputvalue} />
      <Card recipedata={recipedata} />
    </div>
  )
}

export default App2
