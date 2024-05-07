import './App.css';
import { Routes, Route } from "react-router-dom";
import Post from './Component/Post';
import Signup from './Component/Signup';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Services from './Component/Services';
import About from './Component/About';

function App() {
  return (
    <>
      <Header />

      <Routes>


        <Route path='/' element={<>
          <Post />
        </>} />

        <Route path='/signup' element={<>
          <Signup />
        </>} />

        <Route path='/login' element={<>
          <Login/>
        </>} />

        <Route path='/servies' element={<>
          <Services/>
        </>} />

        <Route path='/about' element={<>
          <About/>
        </>} />


      </Routes>
      <Footer/>
    </>
  );
}

export default App;
