import React from 'react'

const CatFact = ({fact}) => {
  return (
    <div className="fact">
        <div className="user"><strong>User:</strong> {fact.user}</div>
        <p><strong>Fact: </strong> <small>{fact.text}</small></p>
        <br/>
    </div>
  )
}

export default CatFact