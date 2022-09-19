import React from 'react'
import "../Create/create.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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

export default function Create() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [developerEmail, setDevemail] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      avatar,
      description,
      price,
      category,
      developerEmail
    };  if (avatar) {
      const data =new FormData();
      const filename = Date.now() + avatar.name;
      data.append("name", filename);
      data.append("file", avatar);
      newPost.avatar = data;
    }
    try {
      const res = await axios.post("https://upayments-studycase-api.herokuapp.com/api/products", newPost);

      console.log(res)
    } catch (err) {}
  };
  return (
    <div className="create">
      <span className="createTitle">Create Product</span>
      <form className="createForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          className="createInput"
          placeholder="Enter product name..."
          onChange={e=>setName(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          className="createInput"
          placeholder="Enter product price..."
          onChange={e=>setPrice(e.target.value)}
        />
        <label>Category</label>
        <input
          type="text"
          className="createInput"
          placeholder="Enter product category..."
          onChange={e=>setCategory(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          className="createInput"
          placeholder="Enter product description..."
          onChange={e=>setDescription(e.target.value)}
        />
        <label>Enter product image</label>
        <input
          type="file"
          className="createInput"
          placeholder="Enter product image..."
          onChange={e=>setAvatar(e.target.files[0])}
        />
        <label>Developer Email</label>
        <input
          type="email"
          className="createInput"
          placeholder="Enter developer Email..."
          onChange={e=>setDevemail(e.target.value)}
        />
        <button className="createButton" type="submit">
          Create
        </button>
        <button className="homeButton">
        <Link className="link" to="">
         Go to Home Page
        </Link>
      </button>
      </form>
    </div>
  )
}
