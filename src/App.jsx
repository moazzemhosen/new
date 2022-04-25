// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar'

import { Home } from './components/Home'
 import { Admin } from "./components/Admin";
import { Routes, Route } from 'react-router-dom'

import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails} from './components/EmployeeDetails'

import { PrivateComponent } from './components/PrivateComponent'
import { Login } from './components/Login'
import { Logout } from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path='/employees/:id' element={
          <PrivateComponent>
            <EmployeeDetails />
          </PrivateComponent>}>

        </Route>

        <Route path='/' element={<Home />}></Route>
        
        <Route path='/employees' element={<EmployeeList />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
       
      </Routes>


    </div>
  );
}

export default App;
