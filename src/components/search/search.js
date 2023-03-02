import React,{ Component } from 'react';
import './search.scss';
const pic = 'image/Header_logo.png';
const alt = 'picture'

class Search extends Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="logo">
                        <img src={pic} alt={alt} />
                    </div>
                    <div className="title">React Weather</div>
                </div>
                <div className="search">
                    <div className="search_form">
                        <form className="form">
                            <input type="text" placeholder="Choose the country" className="search_input" />
                        </form>
                    </div>
                    <button className="button">Поиск</button>
                </div>
            </header>
        )
    }
}

export default Search;