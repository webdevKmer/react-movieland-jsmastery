import React, { useState, useEffect } from 'react'
import CatFact from './CatFact'

const App = () => {
  // api_web_dev = e30356ad
  // api_thus = 851a8f8a
  const API_URL = "http://www.omdbapi.com/?apikey=e30356ad&"

  const [facts, setFacts] = useState([])
  const [users, setUsers] = useState([])

  const catFacts = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    const data = await response.json()
    setFacts(data) 
  }

  const catFactsUsers = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/users')
    const data = await response.json()
    console.log(data);
    setUsers(data) 
  }
  
  useEffect(() => {
    catFacts()
  }, [])

  return (
    <>
      <h1>Cat Facts API</h1>
      <h3>The List of facts</h3>
      {facts.map((fact) => (
        <CatFact key={fact._id} fact={fact}/>
      ) )}
      <h3>The List of users</h3>
      <p>Need to be authenticated to render this.</p>
    </>
  )
}

export default App