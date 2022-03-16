import React from 'react'

function Home(props) {
  return (
    <div>
        <h1>Home</h1>
        
        <h1>My Name is: {props.name} </h1>
        <h1>My age is:{props.age} </h1>
        <h1>My job is:{props.job} </h1>

        


    </div>
  )
}

export default Home