import React,{useEffect, useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import axios from "axios";


const App = () =>{
    const [city,setCity]= useState("");
    const [Data,setData]=useState("");
    const [Min,setMin]=useState("");
    const [Max,setMax]=useState("");
    
    useEffect(()=>{ const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb18015090339db19a63a3d2c74b4000`;
         const res=await axios.get(url);
        //  console.log(res.data.main.temp);
         setData(res.data.main.temp);
         setMin(res.data.main.temp_min);
         setMax(res.data.main.temp_max);
        //  console.log(res.weather);
         
        }
        
        
    

    fetchApi();
    },[city])
    
    
    const inputevent = (event)=>{
        setCity(event.target.value)
    }

    



return(
    <>

    <div className="NavBar">
      <HomeIcon fontSize="large" /> 
      <div className="text">Weather search</div>
      <input type="search" className="search" value={city}
       onChange={inputevent} />
      <SearchIcon fontSize="large" />

    
    </div>

    <div className="box">
    <div className="box2">
        <h1 className="text-center">Hello user</h1>
        <h2>Your City name -{city}</h2>
        <h2>temp-{Data}</h2>
        
        <h2>max temp-{Max}</h2>
        <h2>min temp-{Min}</h2>
        
        </div>
    </div>

    </> 
)

}




export default  App;