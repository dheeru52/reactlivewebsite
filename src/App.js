
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';





function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled  or not
const [alert, setAlert] = useState(null);
const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
setTimeout(() => {
  setAlert(null);
}, 2000);

}


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background ='#042743';
      showAlert("Dark mode is enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      setInterval(() => {
        document.title = 'TextUtils  is Amazing '
      }, 2000);
      setInterval(() => {
        document.title = ' Install TextUtils Now ';
      }, 1500);
    }
    else{
      setMode('light'); 
      document.body.style.background = 'white';
      showAlert("Light mode is enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
<>
{/* <Navbar title="TextUtils" aboutText="About Us"/>
<Navbar/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>

<div className="container my-3 ">
{/* <Switch> */}
{/* /users --> Component 1
/users/home --> Component 2  */}

          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analayse below"  mode={mode}/>
          {/* </Route> */}
{/* </Switch> */}
</div>
{/* <Link/> */}
{/* </Router> */}
</>
  );
}
export default App;