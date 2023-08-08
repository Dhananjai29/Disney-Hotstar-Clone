import './App.css';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Subscribe from './Pages/Subscribe/Subscribe';
import HideAtCertain from './component/HideAtCertain/HideAtCertain';
function App() {
  return (
    <>
      <Router>
        <HideAtCertain>
          <Navbar />
        </HideAtCertain>
        <Routes>
          <Route path='/subscribe' element={<Subscribe />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
