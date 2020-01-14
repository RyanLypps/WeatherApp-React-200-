import React from "react";

import { 
    currentCityName,
    getWeather,
} from './SearchCityActions';


export default class SearchCity extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleTab = this.handleTab.bind(this);
    }

    handleClick(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(currentCityName(value));
    }

    clickHandler(e) {
        // e.preventDefault();
        const { dispatch, city } = this.props;
        dispatch(getWeather(city));
    }
    handleTab(e){ 

        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(getWeather(value));
    }
    render() {
        const { city } = this.props;
        return(
            <div className="container">
                <div className="tab">
                    <button id="sandiego-tab" value="San Diego" onClick={this.handleTab} className="tablinks" >San Diego</button>
                    <button id="paris-tab" value="Paris" onClick={this.handleTab} className="tablinks" >Paris</button>
                    <button id="tokyo-tab" value="Tokyo" onClick={this.handleTab} className="tablinks" >Tokyo</button>
                    <button id="newyork-tab" value="New York" onClick={this.handleTab} className="tablinks" >New York</button>
                    <button id="washington-tab" value="Washington" onClick={this.handleTab} className="tablinks" >Washington D.C.</button>
                </div>
                <input id="search-input" name="searchCity" value={ city } onChange={this.handleClick} type="text" placeholder="Enter the city..." style={{ width: "93%" }}/>
                <button id="search-button" style={{ width: "7%", height: "auto" }} onClick={this.clickHandler}>Search</button>
            </div>
        );
    }
}
