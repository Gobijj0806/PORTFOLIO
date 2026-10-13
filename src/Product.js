import React from 'react'

const Product = () => {
    const productObj =({

        name:"ADIDDAS",
        price:"3999",
        strikeprice:"4999"
    },
    {

        name:"PUMA",
        price:"1999",
        strikeprice:"2999"
    },
    {

        name:"ONE EIGHT",
        price:"3599",
        strikeprice:"4599"
    }
)
  
       
    return (
        <div style={{ display: "flex" }}>
            {productObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img  className="imageShoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Product