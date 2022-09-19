import "./header.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlelg">
          Products
        </span>
      </div>
      <button className="createProductButton">
        <Link className="link" to="/create">
          Create a Product
        </Link>
      </button>
      <img className="headerImg" 
      src="https://img.freepik.com/free-vector/online-shopping-store-with-mobile-shopping-cart-mail-clouds-realistic-style-vector-illustration_548887-136.jpg?w=1380&t=st=1663559348~exp=1663559948~hmac=554ac5d13d7f46ad6c78a647fa99597e62c12f09cf91a24425ec84ce7992b11a"
      alt="" />
    </div>
  )
}