import logo from './logo.svg';
import './App.css';
import Detail from './Product/Detail';
import { Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import {Routes,Route,NavLink} from 'react-router-dom';
import CreateProduct from './Product/CreateProduct';
import ShowProduct from './Product/ShowProduct';


function App() {
  return (
    <div className="App">
      <Navbar
    
    color="dark"
    dark
  >
    <NavLink to='/'>
      <img
        alt="logo"
        src="/logo192.png"
        style={{
          height: 40,
          width: 40,
          marginRight:'8px',
        }}
      />
      Quản Lý Product
    </NavLink>

    <NavLink to ='/create'>
     Create Product
    </NavLink>
  </Navbar>


  <Routes>
    <Route path='/' element={<ShowProduct />}/>
    <Route path='/create' element={<CreateProduct/>}/>
    <Route path='/edit' element={<CreateProduct/>}/>
    <Route path='/product/id' element={<Detail/>}/>
  </Routes>
 
    </div>  
  );
}

export default App;
