// import React, {useState} from 'react'



// function State() {

//     const [beforeUpdate, setUpdate] = useState(0);


//     function update() {
//         setUpdate(beforeUpdate + 1);
//     }



//   return (
//     <div>
//          <h1>{beforeUpdate }</h1> 
//         <button onClick={update}>update</button>
//     </div>
//   )
// }

// export default State


import React, {useState} from 'react'

function State() {

    const [num, setNum] = useState(0);
    const [text, setText] = useState("Abdulrahman");

    const [product, setProducts] = useState({
        product1: "t-shirt",
        product2: "shose",
        product3: "trouser",
        product4: "glasses"
    })


    const [person, setPersons] = useState([
        { name: "abdulrahman", job: "full stack" }, 
        { name: "ahmed", job: "front" },
        { name: "eslam", job: "back stack" },
    ])


    const update4 = () => {
        setProducts(state => { return {...state,  product4: "short"}})
    } 


    const switchHandle = (newName) => {
        setPersons([
            { name: newName, job: "full stack" }, 
            { name: "ahmed", job: "front" },
            { name: "eslam", job: "back stack" },
        ])
    }

  return (
    <div>

        <button onClick={() => switchHandle("Omar")} >Cahnge name</button>





        <h1>{person[0].name} {person[0].job}</h1>
        <h1>{person[1].name} {person[1].job}</h1>




        <h1> {product.product1}  {product.product2} {product.product3} {product.product4}</h1>
        <button onClick={update4} >update4</button>






        <h1>{text}</h1>
        <button onClick={() =>  setText("Ahmed Alaa")}>Change</button>


        <h1>{num}</h1>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>

    </div>
  )
}

export default State