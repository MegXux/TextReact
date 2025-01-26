import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// }from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("white mode has been enabled","success");

    }
};
  return (
    <>
    {/* <Router> */}
        <Navbar title = "TEXTY" mode={mode} toggleMode={toggleMode}/>
        <Alert alert = {alert} showAlert={showAlert}/>
        <div className='container my-3'>
          {/* <Routes> */}
            {/* <Route exact path="/about"element={<About/>}/> */}
            {/* <Route path="/about"element={<Navbar title = "TEXTY" mode={mode} toggleMode={toggleMode}/>} /> */}
            {/* <Route exact path="/" element={<TextForm   heading="Enter the text to analyze" mode = {mode}/>}  />  */}
            <TextForm   heading="Enter the text to analyze" mode = {mode}/>
          {/* </Routes> */}
        </div>
    {/* </Router> */}
    </>
    // <TextForm  heading="Enter the text to analyze" mode = {mode}
  );
} 

export default App;
