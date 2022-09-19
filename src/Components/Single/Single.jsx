import Sidebar from "../Sidebar/Sidebar"
import SingleProduct from "../singleProduct/SingleProduct"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <SingleProduct/>
        <Sidebar/>
    </div>
  )
}
