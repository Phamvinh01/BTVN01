import React, { useState } from "react";


const PrintName =()=>{
    const [userName,setuserName]=useState('');
    let name='';

    const handlegetName=()=>{
        console.log('name:',name);
        setuserName(name);
        
    };

    const handleChangeInput = (event)=>{
        name= event.target.value;
    };
    return(
        <div>
            <input
            type="text"
            placeholder="Moi ban nhap ho ten"
            onChange={handleChangeInput}
            />
            <button onClick={handlegetName}>In Ten</button>
            <h1>Ten cua ban la:{userName}</h1>
        </div>
    );

};

export default PrintName;