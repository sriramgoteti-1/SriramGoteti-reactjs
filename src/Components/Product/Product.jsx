import React from 'react'
import { Link } from "react-router-dom";
import "../Product/product.css"
export default function Product({product}) {
  return (
    <div className="product">
        <img
        className="productImg"
        src={product.avatar}
        alt=""
        />
        <div className="productInfo">
            <div className="productCats">
                <span className="productCat">{product.category}</span>
            </div>
              <Link to={`/product/${product._id}`} className="link">
              <span className="productName">{product.name}</span>
              </Link>
            <br/>
            <span className="productPrice">Rs- {product.price}</span>
            <div className="productDesc">
                <p>
                {product.description}
                </p>
            </div>
        </div>
    </div>
  )
}
