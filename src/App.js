import './App.css';

import RegisterPage from './pages/register_page/reg_page';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Entertain_page from './pages/entertaimentPage/Entertain_page';






function App() {
  return (

     <div className="App">

       <BrowserRouter>
      <Routes>
        <Route path='/' index element={<RegisterPage/>}/>
        <Route path='/category' index element={<MoviesPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/entertainment' element={<Entertain_page/>}></Route>

      </Routes>
      </BrowserRouter> 
      {/* <ProfilePage/> */}

    </div>

  );
}

export default App;
