import { lazy } from "react"
const Courses = lazy(() => import("../components/Courses/Courses"))
const Header = lazy(() => import("../components/Header/Header"))
const Main = lazy(() => import("../components/Main/Main"))
const Products = lazy(() => import("../components/Products/Products"))
import "../index.css"
import Footer from "../components/Footer/Footer"

function FirstPage() {
  return (
    <div className="first">
        <Header />
        <Main />
        <Courses />
        <Products />
        <Footer />
    </div>
  )
}

export default FirstPage