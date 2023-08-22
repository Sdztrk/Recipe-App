
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/login/Login"
import Home from "./page/home/Home"
import About from './components/about/About';
import Header from './components/header/Header';
import Detail from './page/detail/Detail';

const App = () => {

  return (
    <>
    <Router>
    <Header/>

      <Routes>
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;