import { BrowserRouter } from "react-router-dom"
import "./css/style.css"
import Navbar from "./Navbar/Navbar"
import Content from "./Content/Content"

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Navbar />
        <Content />
      </BrowserRouter>
    </>
  )
}

export default App
