import React, { useState } from 'react'
import Clock from 'react-live-clock';

function Visible() {
    const [show, setShow] = useState(true);


  return (
    <div>

    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />

        {
            show ? <h1>Abdulrahman alaa</h1> : null 
        }

        <button onClick={() => setShow(true)}>Show</button>
        <button onClick={() => setShow(false)}>Hidden</button>

    </div>
  )
}

export default Visible