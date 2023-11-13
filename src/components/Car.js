import React, {useState } from 'react'

import './Car.css'
function Car() {

    //passing array in the useState
    const [Cars, setCars]=useState({
        brand :"Ford",
        model: "Mustang",
        year : "1964",
        color: "red"
    });
   
    // function updateCar(prams){
    //     setCars({color:"blue"});
    // }

    //use array spread operator to keep the previous state
    function updateCar(){
        setCars(prams=>{
            return {...prams,color:"blue"}
        });
    }
  return (
    <div>
        <div className='Cars'>
            <h2>Car Brand   : {Cars.brand}</h2>
            <h2>Car Model   : {Cars.model}</h2>
            <h2>Car Year    : {Cars.year}</h2>
            <h2>Car Color   : {Cars.color}</h2>
        </div>
        <button onClick={updateCar}>Set Car Color</button>
    </div>
  ) 
}

export default Car