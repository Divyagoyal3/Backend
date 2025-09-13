import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes,setjokes] = useState([]);


  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) => {
     setjokes(response.data)
    })
    .catch((error) =>{
      console.log("Error message has been stop working",error);
    })
  })

  return (
    <>
      <h1>Chai aur  STACK</h1>
      <p>Jokes: {jokes.length}</p>
 
    {
      jokes.map((joke,index) =>(
      <div key = {jokes.id}>
         <h3>{joke.title}</h3>
         <p>{joke.content}</p>
      </div>
      ))
    }


    </>
  )
}

export default App
