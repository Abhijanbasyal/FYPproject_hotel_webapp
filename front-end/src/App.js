import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Homepage/Home.js';
import Recreation from './pages/Recreationpage/Recreation.js';
import Restaurant from './pages/Restaurant/Restaurant.js';
import Room from './pages/Room/Room.js';
import Contact from './pages/Contact/Contact.js';
import Login from './pages/Login/Login.js';
import Blog from './pages/Blog/Blog.js'
import Event from './pages/Event/Event.js';
import Notice from './pages/Notice/Notice.js';
import Menu from './pages/Restaurant/Menu.js'

function App() {
  return (
    <div className="   ">
      <div className='fixed bg-site bg-cover h-screen w-screen '>
      <div className='bg-black/60 absolute top-0 left-0 w-full h-screen '></div>
      </div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Home />}/>
          <Route path='/recreation' element={<Recreation />}/>
          <Route path='/room' element={<Room/>}/>
          <Route path='/restaurant' element={<Restaurant />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/event' element={<Event />}/>
          <Route path='/notice' element={<Notice />}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
