import React,{useState} from 'react';
import style from './light-traffic.module.css';

const LightTraffic =()=>{
    const[color,setColor]=useState('red');

    const handleChangeColor =()=>{
        if(color==='red'){
            setColor('yellow');
        }else if(color==='yellow'){
            setColor('green');
        }else {
            setColor('red');
        }
    }
};
return(
    <div>
        <button onClick={handleChangeColor}>Next</button>
        <div>
            style={{
                display:'flex',
                justif
            }}
        </div>
        <div>
            className=
        </div>
    </div>
)