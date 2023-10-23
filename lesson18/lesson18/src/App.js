import logo from './logo.svg';
import './App.css';
import CardProduct from './CardProduct';
import CardCollection from './CardCollection';
import PrintName from './PrintName';  

function App() {
  // let number=1;

  // const handleIncreamemt=()=>{
  //   number=number+1;
  //   console.log(number);
  //   console.log(handleIncreamemt);
  // };
  
  // const handleDecreamemt=()=>{
  //   number=number-1;
  //   console.log(number);
  //   console.log(handleDecreamemt);
  // };

  // const reset =()=>{
  //   number=1;
  //   console.log(number);
  // };
  // const handleActions=(operator)=>{
  //   if(operator==='+'){
  //     number=number+1;
  //     console.log('action cong');
  //   }else if(operator === '-'){
  //     number=number-1;
  //     console.log('action tru');
  //   }else{
  //     number=1;
  //     console.log('action reset');
  //   }
  // };
 

  return (
    <div className="App">
     <PrintName/>
    
     
     {/* <h1>{number}</h1>
     <button >
      onClick
     </button>
     <button onClick={handleDecreamemt}>-</button>
     <button onClick={reset}>reset</button> */}
    </div>

  );
}

export default App;
