import './App.css';

import RegisterPage from './pages/register_page/reg_page';
import Movies_tile_page from './pages/movies_tile_page/movies_tile_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (

     <div className="App">

      <BrowserRouter>
      <Routes>
        <Route index element={<RegisterPage/>}/>

      </Routes>
      </BrowserRouter>
      {/* <Movies_tile_page/> */}

    </div>

  );
}

export default App;
