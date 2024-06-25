import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const[mode , setMode] = useState('light'); //whetehr dark mode is enabled or not
  const[alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 

//   const summerMode =()=>{
//     if(mode=== 'light'){
//       setMode('summer');
//       document.body.style.backgroundColor='#ffff00';
//     }
//     else{ 
//       setMode('light');
//       document.body.style.backgroundColor='white';
//   }
// }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'Textutils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
      document.title = 'Textutils - Light Mode';

    }
  }
  return (
      <>
      <BrowserRouter>
      <Navbar title = "textutils" aboutText="about textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3" >
        <Routes>

          {/* we use exact path because react does partial matching for eg. /user --> componen5t 1 and /users/about --> component 2 */}
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element = {
          <TextForm showAlert={showAlert} heading = "Try Textutils - Word counter , Character counter, Remove extra spaces" mode={mode}/>}>
          </Route>
        </Routes>
        </div>
       </BrowserRouter>
      
      </> 
  );
}

export default App;
