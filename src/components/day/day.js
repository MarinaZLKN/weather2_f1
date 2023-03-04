import React from 'react';
import './day.scss';
const logo = 'image/sun.png';


const Day = ({data})=> {
    return (
        <div className="day_container">
            <div className="upper_block">
                <div className="upper_info">
                    <div className="temperature"> {Math.round(data.main.temp)} °C</div>
                    <div className="weather">Today: <span> {data.weather[0].description}</span></div>
                </div>
                <img className="weather-icon" src={logo} alt="weather"/>
            </div>
            <div className="bottom_block">
                <div className="city"><span> {data.city}</span></div>
                <div className="parameter-row">
                    <span className="parameter-label"> Feels like: </span>
                    <span className="parameter-value"> {Math.round(data.main.feels_like)} °C</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label"> Wind: </span>
                    <span className="parameter-value"> {data.wind.speed} m/s</span>
                </div>
            </div>
        </div>

    )
}

export default Day;