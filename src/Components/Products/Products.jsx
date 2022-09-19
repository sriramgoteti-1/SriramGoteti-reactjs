import React from 'react'
import Product from "../Product/Product"
import "../Products/products.css"
export default function Products({products}) {
  
  return (
    <div className="products" >
        {
          (products).map(p=>(
            <Product product={p}/>
          ))
        }
    </div>
  )
}
