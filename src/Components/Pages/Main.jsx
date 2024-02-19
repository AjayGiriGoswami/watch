import React from 'react'
import Cards from './Card'
import products from './Api'


const Main = ({handleitem}) => {
  return (
    <div>
        {products.map((item)=>{
            return(
                <Cards item ={item} handleitem ={handleitem}/>
            )
        })}

    </div>
  )
}

export default Main