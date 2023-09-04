import React, {useState} from 'react'
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Mainform from './components/Mainform';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  const [mode, setmode] = useState('light')
  const [actmodebtntxt, setactmodebtntxt] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const togglemode = ()=> {
    if(mode === 'light'){
      setmode('dark')
      setactmodebtntxt('Enable light Mode')
      document.body.style.background = '#21252999';
      showAlert('Dark mode enabled', 'success')
    } else {
      setmode('light')
      setactmodebtntxt('Enable Dark Mode')
      document.body.style.background = 'white';
      showAlert('Light mode enabled', 'success')
    }
  }



  return (
    <>
    <BrowserRouter>
      <Navbar title="Text Changer" homePg="Home " aboutPg="About" mode={mode} togglemode={togglemode}  actmodebtntxt={actmodebtntxt}/>
      <Alert alert={alert}/>
      <Routes>
        <Route index element={<Mainform showAlert={showAlert} formHeading="Enter your text here" mode={mode}/>} />
        <Route path="/aboutus" element={<Aboutus faqh="Frequently Asked Questions"/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
