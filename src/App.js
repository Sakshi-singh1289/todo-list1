import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Main } from './components/Main';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import Home from './components/Home';
import Greet from './components/Greet';
import { Navbar } from './components/Navbar';

function App() {
return (
  <>
    <Router>
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/greet" element={<Greet />}/>
          <Route exact path="/nav" element={<Navbar />}/>
          {/* <Route exact path="/signuphome" element={<SignupHome />} /> */}
        </Routes>
      </div>
    </Router>
  </>
);
}

export default App;
