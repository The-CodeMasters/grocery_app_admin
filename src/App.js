import './App.css';
import Login from './pages/login/Login.js';
import Routes from './Routes.js'
import { useState } from 'react';
function App () {
  const [islogin, setislogin] = useState(false)

  if (islogin) {
    return (
      <Routes islogin={islogin} setislogin={setislogin} />
    )
  } else {
    return (
      <Login islogin={islogin} setislogin={setislogin} />
    );
  }
}

export default App;