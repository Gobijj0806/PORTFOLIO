import React from 'react'
import './Bike.css'


const Bike = ({ bikeObj }) => {
  return (
    <div style={{ display: "flex" }}>
            {bikeObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={item.image} className="image" />
                            <h1 className="heading">{item.bikename}</h1>
                            <div className="priceContainer"> 
                                <h4 className="price">${item.price}</h4><br />
                                {/* <h3 className="mod">{item.model}</h3> */}
                                
                            </div>
                            <h3 className="mod">{item.model}</h3> 
                           
                            
                                {/* <strike className="strike">${item.strikePrice}</strike></div> */}
                            <button className="button">  BUY NOW</button>

                        </div>
                        
                    </>
                )
            })}
        </div>
  )
}

export default Bike

