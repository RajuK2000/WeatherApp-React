import "./weather.css"
import SearchIcon from "./Images/SearchIcon.jpeg"
import sun from "./Images/sun.png"
import wind from "./Images/wind.png"
import humidity from "./Images/humidity.png"
import axios from "axios"
import { useState } from "react"
import backk from "./Images/backk.jpg"
import background from "./Images/background.jpeg"


const WeatherApp=()=>{
    const [result,setResult]=useState({})
    
    let Apikey="3cf1a70d5e235863d72ad3b89adc4937"

    const search = async()=>{
        const city=document.getElementsByClassName("CityName")[0].value
        if(city===""){
            return 0;
        }
        try{
       let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}`
       
       const result1= await axios.get(url)
        setResult(result1.data) 
        }catch(error){
            console.log('error: ', error);
            
        }
    }
    console.log(result)
   
    return(
        
        <div className="main" style={{ backgroundImage: `url(${backk})`, backgroundRepeat: 'no-repeat',backgroundSize:'cover', padding:50 }}>
        <div className="MainContainer" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
            <div className="SearchBar">
                <input type="text" className="CityName" placeholder="Enter City Name"></input>
                <div className="SearchIcon">
                    <img src={SearchIcon} alt="" height={40} width={40} onClick={()=>search()} style={{mixBlendMode:"multiply"}}></img>
                </div>
            </div>
            <div className="WeatherImage">
                <img src={sun} alt="" height={200} width={200}></img>
            </div>
            
            <div className="Temperature">{Math.floor(result.main && result.main.temp-273)}°c</div>
            <div className="CityName">{result.name}</div>
            <div className="DataContainer">
                <div className="element">
                    <img src={humidity} alt="" className="icon" height={50} width={40}></img>
                    <div className="Data">
                        <div className="HumudityPercentage">{result.main && result.main.humidity} %</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="" className="icon" height={40} width={40}></img>
                    <div className="Data">
                        <div className="HumudityPercentage">{result.wind && result.wind.speed} km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )

}
export default WeatherApp