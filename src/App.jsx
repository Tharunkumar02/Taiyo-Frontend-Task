import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Sidebar from "./components/sidebar/Sidebar"
import Contacts from "./pages/contacts/Contacts"
import Header from "./components/header/Header"
import Data from "./pages/chart/Data"

function App() {

  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/chart" element={<Data />} />
      </Routes>
    </Router>
  )
}

export default App
