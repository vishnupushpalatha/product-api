
import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import ViewProduct from './Components/ViewProduct';


function App() {
  return (
    <Router>
    <Routes>

    <Route path='/' element={<Home  link="/register" />}/>
    <Route path='/register' element={<Registration/>}/>
    <Route path='/userspace' element={<Dashboard/>}/>
   
    
  
      
    </Routes>  
    </Router>
  );
}

export default App;
