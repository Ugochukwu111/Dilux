import { Routes , Route } from "react-router-dom"

import { HomePage } from "./Pages/HomePage"
import { ListingPage } from "./Pages/ListingPage"
import { NavBar } from "./Components/NavBar"


function App() {
 

  return (
    <>
       <NavBar/>
      <Routes>
        <Route index element = {<HomePage/>}></Route>
        <Route path='/properties' element = {<ListingPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
