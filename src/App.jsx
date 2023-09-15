import Header from './Components/Header/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
