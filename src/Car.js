import React from 'react'
import './Car.css'


const Car = ({ carObj }) => {
  return (
    <div style={{ display: "flex" }}>
            {carObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={item.image} className="image" />
                            <h1 className="heading">{item.carname}</h1>
                            <div className="priceContainer"> 
                                <h4 className="price">${item.price}</h4> 
                                
                            </div>
                            {/* <h3 className="mod"> MODEL{item.model}</h3> */}
                           
                            
                                {/* <strike className="strike">${item.strikePrice}</strike></div> */}
                            <button className="button">  BUY NOW</button>

                        </div>
                        
                    </>
                )
            })}
        </div>
  )
}

export default Car


