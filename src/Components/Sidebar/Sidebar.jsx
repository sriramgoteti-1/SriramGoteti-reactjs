import React from 'react'
import axios from"axios"
import { useEffect, useState } from "react"
import "./sidebar.css"

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
export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://upayments-studycase-api.herokuapp.com/api/categories");
      setCats(res.data.categories)
    };
    fetchPosts();
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarList">
          {cats.map((t)=>(
              <li className="sidebarListItem">{t.name}</li>
              ))}
          </ul>
        </div>
        
    </div>
  )
}
