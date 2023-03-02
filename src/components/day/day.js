import React,{ Component } from 'react';
import './day.scss';
const logo = 'image/sun.png';
const alt = 'sun';


class Day extends Component {
    render() {
        return (
            <div className="day_container">
                <div className="upper_block">
                    <div className="upper_info">
                        <div className="temperature"> 20°</div>
                        <div className="day"> Today</div>
                    </div>
                    <img src={logo} alt={alt}/>
                </div>
                <div className="bottom_block">
                    <div className="city">City:<span> Tallinn</span></div>
                    <div className="time">Time:<span> 19:32</span></div>
                </div>
            </div>
        );
    }
}

export default Day;