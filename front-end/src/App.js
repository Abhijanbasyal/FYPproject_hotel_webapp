import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Homepage/Home.js';
import Recreation from './pages/Recreationpage/Recreation.js';
import Restaurant from './pages/Restaurant/Restaurant.js';
import Room from './pages/Room/Room.js';
import Contact from './pages/Contact/Contact.js';
import Blog from './pages/Blog/Blog.js'
import Event from './pages/Event/Event.js';
import Service from './pages/Service/Service.js';
import SaladMenu from './pages/Restaurant/Menu/SaladMenu.js';
import DishMenu from './pages/Restaurant/Menu/DishMenu.js';
import DrinksMenu from './pages/Restaurant/Menu/DrinksMenu.js';
import DesertMenu from './pages/Restaurant/Menu/DesertMenu.js';
import BeverageMenu from './pages/Restaurant/Menu/BeverageMenu.js';
import Login from './pages/LoginSIgnup/Login.js';
import SignUp from './pages/LoginSIgnup/SignUp.js'

function App() {
  return (
    <div className="   ">
      <div className='fixed bg-site bg-cover h-screen w-screen z-0 '>
        <div className='  absolute top-0 left-0 w-full h-screen '></div>
      </div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<Home />}/>
          <Route path='/recreation' element={<Recreation />}/>  
          <Route path='/room' element={<Room/>}/>
          <Route path='/restaurant' element={<Restaurant />}>
            
            <Route path='salad' element={<SaladMenu />} />
            <Route path='dish' element={<DishMenu />}/>
            <Route path='drinks' element={<DrinksMenu />} />
            <Route path='desert' element={<DesertMenu />} />
            <Route path='beverage' element={<BeverageMenu />} />


         
          </Route>
          <Route path='/contact' element={<Contact />}/>
          
          {/* login register routing */}

          <Route path='/login' element={< Login />}/>
          <Route path='/signup' element={< SignUp />}/>


          <Route path='/blog' element={<Blog />}/>
          <Route path='/event' element={<Event />}/>
          <Route path='/service' element={<Service />}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
