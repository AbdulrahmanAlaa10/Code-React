import React from 'react'
import Home from "./Home"
import About from "./About"
import State from "./State"

import Visible from "./Visible"

function App() {

  function HandleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  function handleSub2() {
    console.log('You clicked submit222222.');
  }


  const clickName = e => {
    e.preventDefault();
    console.log('I am Abdulrahman ALaa.');
  }

  const clickName2 = (name, e) => {
    console.log("Hello" + name , e.target);
  }

  return (
      <div>

        <Visible />

        <State />

          <button onClick={(e) => clickName2("Abdulrahman Alaa", e)} >clickName2</button>



          <form onSubmit={HandleSubmit}>
            <button type="submit">Click Here</button>
          </form>

          <button onClick={handleSub2} >handleSub2</button>
          <button onClick={clickName} >clickName</button>





          <Home name="abdulrahman alaa" age="30" job="front end" /> 
          <About img1="/Images/pexels-tima-miroshnichenko-5380659.jpg" img2="/Images/Online Courses (1).png" />

      </div>
  )
}

export default App