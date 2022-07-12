import { BrowserRouter } from "react-router-dom"
import "./css/style.css"
import Navbar from "./Navbar/Navbar"
import Content from "./Content/Content"
import Footer from "./Footer/Footer"
import AppProvider from "./AppProvider"
import AuthProvider from "./auth/AuthProvider"
function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <AuthProvider>
          <AppProvider>
            <Navbar />
            <div className='content-wrapper'>
              <Content />
            </div>
            <Footer />
          </AppProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
