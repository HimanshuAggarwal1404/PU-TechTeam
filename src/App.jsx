import Header from './Components/Header/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home'
import ExplorePath from './Pages/ExplorePathPage/ExplorePath';
import CrackInterviews from './Pages/CrackInterviewsPage/CrackInterviews';
import Upskill from './Pages/UpskillPage/Upskill';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/ExplorePath' Component={ExplorePath}/>
        <Route path='/CrackInterviews' Component={CrackInterviews}/>
        <Route path='/Upskill' Component={Upskill}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
