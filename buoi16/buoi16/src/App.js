import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Navigation from './Navigation';


function App() {

  const style ={
    color: 'red',
    fontsize : '50px',
    
  }
  return (
    <div>
        <Header/>
        <Navigation/>
        <Footer/> 
        <Content/>  
    </div>
  )
}


export default App;
