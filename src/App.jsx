import { Routes , Route } from "react-router-dom"

import { HomePage } from "./Pages/HomePage"
import { NavBar } from "./Components/NavBar"


function App() {
 

  return (
    <>
       <NavBar/>
      <Routes>
        <Route path='/' element = {<HomePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
