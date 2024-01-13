import './App.css';
import Home from './Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import Personal from './Personal';
import Portfolio from './Portfolio';
import NonProfit from './NonProfit';
import News from './News';

import Login from './Login';
import Register from './Register';

import Contact from './Contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/> 
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Personal" element={<Personal/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/NonProfit" element={<NonProfit/>}/>
        <Route path="/News" element={<News/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
