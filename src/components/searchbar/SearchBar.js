import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import Button from '../styleComponents/Button';
import Input from '../styleComponents/Input';

const SearchBar = () => {
    const navigate = useNavigate()
    const [input, setinput] = useState("")
    const [data, setData] = useState([])

        const getData = async (value) => {
          const URL = `https://api.edamam.com/search?q=${value}&app_id=da13e823&app_key=d6249dd769ca0cf72d0f989d715452f0&mealType=Breakfast`
          try {
            const response = await axios.get(URL)
            console.log(response.data.hits)
            setData(response.data.hits)
          }
          catch(err) {
             console.log(err)
             alert(err)
          }
        }

    const handleSubmit = (e) => {
      e.preventDefault()
      getData(input)
      setinput("")
    }

  return (
    <div style={{width:"100%", height:"100vh", backgroundColor:"#E1F1DD"}}>
    <div>
    <form 
    style={{textAlign:"center", backgroundColor:"#E1F1DD", width:"100%", height:"10vh" ,padding:"50px 0px"}}
    onSubmit={handleSubmit}
    >
      <Input 
      value={input}
      onChange={(e) => setinput(e.target.value)}
      placeholder='Search for the recipe'
      />

      <Button 
      type='submit'
      >
        Search
      </Button>
    </form>
    </div>
    <div style={{width:"80vw",height:"85vh",backgroundColor:"#E1F1DD", marginTop:"-25px",display:"flex", flexDirection:"row", flexWrap:"wrap", marginLeft:"10vw"}}>
        {data.map((meal, index)=> {
          return(
          <>
          <div key={index} style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"5px 25px", width:"250px",border:"2px solid black", borderRadius:"5px"}} >
             <h1 style={{fontSize: "1rem", fontFamily: 'Courier New', width:"200px", height:"50px", marginBottom:"25px"}}   >{meal.recipe.label}</h1>
             <img style={{width:"200px"}} src={meal&& meal.recipe.image } />
             <button style={{width:"100px",marginTop:"25px" }} onClick={ () => navigate ("/detail", {state:{meal:meal}}) }  >View More</button>
          </div>
          </>
          )
        })}
    </div>
    </div>
  )
}

export default SearchBar