import React, { useEffect, useState } from 'react'
import './Int.css'
import axios from 'axios'
function WeatherCon() {
   const [calleit,setcallit]=useState({
    celcius:10,
    countryname:'london',
    humidity:10,
    speed:3

   })
   const [searchname,setsearchname]=useState('')
  
    // useEffect(()=>{
       
    // })


    const handlee=()=>{
      if (searchname!=='') {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchname}&appid=153320135f2f9ec7d14d593f30d1952a&&units=metric`)
        .then(res=>{setcallit({...calleit,celcius:res.data.main.temp,countryname:res.data.name,humidity:res.data.main.humidity})})
        .catch(eror=>console.log(eror)); 
    }
  }
  return (
    <div className='container'>
      <span>  
           <input type='text' value={searchname}  onChange={(e=>setsearchname(e.target.value))} placeholder='Enter country name'></input>
            <div className='searchcontainer' onClick={handlee}>
             <img className='searchicon'src='./search.svg'></img>
            </div>
           </span>
           
      <img src='./partly.png'></img>
     
       <div className='celcius'>{Math.round(calleit.celcius)}°C</div>
       <h3 className='countryname'>{calleit.countryname}</h3>
    </div>
  )
}

export default WeatherCon
