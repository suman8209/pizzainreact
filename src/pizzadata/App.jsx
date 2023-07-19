import React from 'react'
import pizzaData from './data'
import "./pizza.css"


function App() {
  return (
    <>
        <div className='wrapper'>
            {
                pizzaData.map((pizza, index) => {
                    return(
                        <div className='box'>
                            <img src={pizza.photoName} alt={pizza.name}/>
                            <div className='box1'>

                            
                            <h1>{pizza.name}</h1>
                            <p>{pizza.ingredients}</p>
                            <p>{(pizza.soldOut === false) ? ("Price $. "+pizza.price):"soldOut"}</p>
                            {/* <p>{pizza.soldOut}</p> */}
                            </div>

                        </div>

                        
                    )
                })
            }
        </div>
    </>
    
  )
}

export default App