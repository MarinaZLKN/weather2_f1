import React from 'react';
import './search.scss';
const pic = 'image/Header_logo.png';
const alt = 'picture'


function Search () {

    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <img src={pic} alt={alt} />
                </div>
                <div className="title">React Weather</div>
            </div>
            <div className="task">
                Задание F1
            </div>
        </header>
    )
}

export default Search;

