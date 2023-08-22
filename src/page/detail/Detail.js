import React from 'react'
import { useLocation } from 'react-router-dom'


const Detail = () => {
    const location = useLocation()
    const meal = location.state.meal
    console.log(meal)

  return (
    <>
    <h1 style={{fontSize: "2rem", fontFamily: 'Courier New',  height:"50px", marginBottom:"25px", textAlign:"center"}} >{meal.recipe.label}</h1>
      <div style={{ width:"70%", height:"70vh", display:"flex", flexDirection:"row",justifyContent:"space-around", alignItems:"center", marginLeft:"15%", border:"2px solid black",borderRadius:"5px" ,backgroundColor:"#5EAF9C"}}>
        <div style={{width:"20%", backgroundColor:"#C3A9FF",borderRadius:"5px", alignItems:"center",display:"flex", flexDirection:"column"}}>
         <p>{meal.recipe.totalNutrients.CA.label}: { Math.round(meal.recipe.totalNutrients.CA.quantity)} gr.</p> 
         <p>{meal.recipe.totalNutrients.ENERC_KCAL.label}: { Math.round(meal.recipe.totalNutrients.ENERC_KCAL.quantity)} kcal</p> 
         <p>{meal.recipe.totalNutrients.FAT.label}: { Math.round(meal.recipe.totalNutrients.FAT.quantity) } mg.</p> 
         <p>{meal.recipe.totalNutrients.SUGAR.label}: {Math.round(meal.recipe.totalNutrients.SUGAR.quantity)} mg.</p> 
        </div>
        <div style={{width:"20%"}}>
          <img src= {meal.recipe.image}  />
        </div>
        <div style={{width:"20%",backgroundColor:"#C3A9FF",borderRadius:"5px" }}>
        <ul>
          {meal.recipe.ingredientLines.map((step, index)=> {
            return (
            <li key={index} style={{listStyleType:"decimal", margin:"5px auto"}}> {step}</li>
            )
          })}
        </ul>
        </div>
      </div>
    </>
  )
}

export default Detail