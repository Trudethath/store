import { BrowserRouter } from "react-router-dom"
import "./css/style.css"
import Navbar from "./Navbar/Navbar"
import Content from "./Content/Content"
import Footer from "./Footer/Footer"
import AppProvider from "./AppProvider"

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <AppProvider>
          <Navbar />
          <div className='content-wrapper'>
            <Content />
          </div>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
