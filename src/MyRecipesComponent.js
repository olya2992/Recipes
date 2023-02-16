function MyRecipesComponent({label, image, calories, ingredients}){
    return(
        <div>
            <div className="container">
            <h2>{label}</h2>
            </div>

            <div className="container">
            <img src={image}/>
            </div>

            <div className="container">
            <p className="par">{calories.toFixed()} calories </p>
            </div>

            <div className="container">
            <ul className="list">
                {ingredients.map(ingredient =>(<li>{ingredient}</li>))}
            </ul>
            </div>
          
        </div>
    )
}
 export default MyRecipesComponent;