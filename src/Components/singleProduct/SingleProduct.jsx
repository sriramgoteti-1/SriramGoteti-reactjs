import React from 'react'
import "../singleProduct/singleProduct.css";
import {useLocation} from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";

const accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdvdGV0aXNyaXJhbTIyNjhAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL3NyaXJhbWdvdGV0aS0xIiwiaWF0IjoxNjYzMzk0MTc1LCJleHAiOjE2NjM4MjYxNzV9.I8mSzXz9_x_SeZs5FgyOjQtIhoZZ4utJK6qgcCDhT6A'

axios.interceptors.request.use(
    config=>{
        config.headers.authorization= `Bearer ${accessToken}`;
        return config;
    },
    error=>{
        return Promise.reject(error)
    }
)


export default function SingleProduct() {
    const location=useLocation()
    const path=(location.pathname.split("/")[2]);
    const [product, setProduct]=useState({})
    useEffect(()=>{
    const getProduct=async ()=>{
          const res= await axios.get("https://upayments-studycase-api.herokuapp.com/api/products/"+path);
          setProduct(res.data.product)
        };
        getProduct()
      },[path])
    
      const handleDelete = async () => {
        try {
          await axios.delete(`https://upayments-studycase-api.herokuapp.com/api/products/${product._id}`);
          window.location.replace("/");
        } catch (err) {}
      };  

  return (
    <div className="singleProduct">
    <div className="singleProductWrapper">
    {product.avatar &&(
      <img
      className="singleProductImg"
      src={product.avatar}
      alt=""
      />
    )}
      <h1 className="singleProductName">
        {product.name}
      </h1>
      <div className="singleProductInfo">
        <span className="singleProductPrice">
          Rs-{product.price}
        </span>
      </div>
      <div className="singleProductInfo">
        <span className="singleProductCategory">
          {product.category}
        </span>
      </div>
      <p className="singleProductDesc">
        {product.description}
        </p>
    </div>
    <button className="deleteButton" onClick={handleDelete}>
        Delete Product
    </button>
  </div>
  )
}
