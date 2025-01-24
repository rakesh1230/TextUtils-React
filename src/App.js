import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, Setmode] = useState('light');
  const [alert, Setalert] = useState(null);

  const Showalert = (message, type) => {
    Setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      Setalert(null);
    }, 1500);
  };

  const removeBodyclass = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeBodyclass();
    document.body.classList.add("bg-" + cls)
    if (mode === "light") {
      Setmode("dark");
      document.body.style.backgroundColor = '#042743';
      Showalert("Dark mode has been enabled", "success");
    } else {
      Setmode("light");
      document.body.style.backgroundColor = 'white';
      Showalert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About  mode={mode} />} />
            <Route path="/" element={<TextForm title="Text Utils: Word Counter, Character Counter" mode={mode} Showalert={Showalert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
