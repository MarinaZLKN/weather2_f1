import React,{ Component } from 'react';
import Search from './components/search/search';
import Day from './components/day/day';

class App extends Component{
    render() {
        return (
            <div className="container">
                <Search />
                <Day />
            </div>
        );
    }
}

export default App;
