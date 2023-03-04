import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton
} from "react-accessible-accordion";
import './week.scss';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Week = ({data}) => {
    const dayOfWeek = new Date().getDay();
    const weekDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayOfWeek
        ));


    return (
        <>
        <div className="week-title"> 5 Days Weather </div>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 5).map((item, index) =>(
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="week-day">
                                    <div className="day-of-week"> {weekDays[index]}</div>
                                    <div className="day-temp"> Temepature: {Math.round(item.main.temp)} °C</div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="day-details">
                                <div className="daily-details-item">
                                    <label>It is </label>
                                    <label>{item.weather[0].description}</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Humidity: </label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Wind speed: </label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Pressure: </label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Clouds: </label>
                                    <label>{item.clouds.all}</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>);
}
export default Week;