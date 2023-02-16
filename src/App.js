import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4'
import egg from './egg.png'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const [mySearch, setMySearch] = useState('')
  const[myRecipes, setMyRecipes] = useState([])
  const[wordSubmitted, setWordSubmitted]= useState('salad')


  useEffect(() => {
    getRecipe();
  },[wordSubmitted])
  
const getRecipe = async () => {
const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=f19aeac2&app_key=5fdcca8bbc6e8293dfb2116611d68a4b`)
const data = await response.json();
setMyRecipes(data.hits)
 


 }


const myRecipeSearch =(e)=>{
  console.log(e.target.value)
  setMySearch(e.target.value)
}

const finalSearch = (e)=> {
  e.preventDefault();
  setWordSubmitted(mySearch)
}
return(
  <div className="App">

  <div className="container">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
  <h1>Easy to make, at-home dinner recipes!</h1>
  </div>

  <div className='container' >
    
    <form onSubmit={finalSearch}>
     <input className='searchTerm' placeholder='Type any ingredient...' onChange={myRecipeSearch} value={mySearch}>
     </input>
     <button className=''>Show Me Recipes</button>
    </form>
  </div>




<div>
{myRecipes.map(element => (
  <MyRecipesComponent 
  label={element.recipe.label}
  image ={element.recipe.image}
  calories = {element.recipe.calories}
  ingredients ={element.recipe.ingredientLines}
   />
))}
   </div>


  </div>
  
)

}

export default App;
