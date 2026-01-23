import { Routes , Route } from "react-router-dom"

import { HomePage } from "./Pages/HomePage"
import { ListingPage } from "./Pages/ListingPage"
import { ContactUsPage } from "./Pages/ContactUsPage"
import { NavBar } from "./Components/NavBar"
import { InvestmentPage } from "./Pages/InvestmentPage"


function App() {
 

  return (
    <>
       <NavBar/>
      <Routes>
        <Route index element = {<HomePage/>}></Route>
        <Route path='/properties' element = {<ListingPage/>}></Route>
        <Route path="/contact-us" element={<ContactUsPage/>}></Route>
        <Route path="/investment-plan" element={<InvestmentPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
