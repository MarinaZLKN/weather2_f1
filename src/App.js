import React, {useState} from 'react';
import Search from './components/search/search';
import Day from './components/day/day';
import Input from "./components/input";
import Week from './components/week/week';
import {WEATHER_API_URL, WEATHER_API_KEY} from './api';


function App () {
    const [dayWeather, setDayWeather] = useState(null);
    const [fiveDaysWeather, setFiveDaysWeather] = useState(null);


    const handleOnSearchChange = (searchData) => {
        const [ lat, lon ] = searchData.value.split(" ");

        //fetch for the 1-day weather
        const weatherForDay = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        //fetch for the 5-day weather
        const weatherForFiveDay = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([weatherForDay, weatherForFiveDay])
            .then(async (response) => {
                const weatherDayResponse = await response[0].json();
                const weatherFiveDayResponse = await response[1].json();

                setDayWeather({ city: searchData.label, ...weatherDayResponse});
                setFiveDaysWeather({ city: searchData.label, ...weatherFiveDayResponse});
            })
            .catch((err) => console.log(err));

    };

    console.log(fiveDaysWeather);

        return (
            <div className="container">
                <Search />
                <Input onSearchChange={handleOnSearchChange}/>
                {dayWeather && <Day data={dayWeather}/>}
                {fiveDaysWeather && <Week data={fiveDaysWeather}/>}
            </div>
        );
}

export default App;
