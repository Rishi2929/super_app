import './App.css';

import RegisterPage from './pages/register_page/reg_page';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import EntertainPage from './pages/entertaimentPage/EntertainPage';






function App() {
  return (

     <div className="App">

       <BrowserRouter>
      <Routes>
        <Route path='/' index element={<RegisterPage/>}/>
        <Route path='/category' index element={<MoviesPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/entertainment' element={<EntertainPage/>}></Route>

      </Routes>
      </BrowserRouter> 
      {/* <ProfilePage/> */}

    </div>

  );
}

export default App;
