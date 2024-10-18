import Contact from "./component/Contact"
import Home from "./component/Home"
import Nav from "./component/Nav"
import { BrowserRouter, Routes,Route } from "react-router-dom"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
        </Route>
    </Routes>
    </BrowserRouter>

  

    </>
  
  )}
export default App
