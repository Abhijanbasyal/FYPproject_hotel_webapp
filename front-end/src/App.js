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

import Username from './pages/LoginSIgnup/Username.js';
import Password from './pages/LoginSIgnup/Password.js';
import Recovery from './pages/LoginSIgnup/Recovery.js';
import Reset from './pages/LoginSIgnup/Reset.js';
import Register from './pages/LoginSIgnup/Register.js';
import PageNotFound from './pages/LoginSIgnup/PageNotFound.js';
import Profile from './pages/LoginSIgnup/Profile.js';


// middleware
import {AuthorizeUser, ProtectRoute} from './middleware/auth.js'

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
          <Route path='/username' element={<Username />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/password' element={<ProtectRoute><Password /></ProtectRoute>}/>  
          <Route path ='/recovery' element={<Recovery />}/>
          <Route path='/reset' element={<Reset />}/>  
          <Route path='/profile' element={<AuthorizeUser><Profile /></AuthorizeUser>}/>
          <Route path='*' element={<PageNotFound />}/>   

          <Route path='/blog' element={<Blog />}/>
          <Route path='/event' element={<Event />}/>
          <Route path='/service' element={<Service />}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
