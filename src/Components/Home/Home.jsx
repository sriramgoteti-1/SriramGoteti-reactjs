
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import Products from "../Products/Products"
import "../Home/home.css"
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

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://upayments-studycase-api.herokuapp.com/api/products");
      setProducts(res.data.products)
    };
    fetchPosts();
  }, []);
  return (
    <>
    <Header/>
    <div className="home">
        <Products products={products}/>
        <Sidebar/>
    </div>
    </>
)}

