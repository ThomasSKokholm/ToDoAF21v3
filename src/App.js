// import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import { ToastContainer} from "react-toastify";
import LoginForm from './components/routes/LoginForm';
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
    
      </Routes>
    </div>
  );
}

export default App;
