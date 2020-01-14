import React from "react";

export default class CurrentCity extends React.Component {
   
    render() {
        const { city, temperatureMax, temperatureMin, pressure, humidity, speed, lat, lon } = this.props;
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Current City</h3>
                        <h5> {city} </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Temp High</h5>
                                {temperatureMax}
                            </div>
                            <div className="col-md-4">
                                <h5>Temp Low</h5>
                                {temperatureMin}
                            </div>
                            <div className="col-md-4">
                                <h5>Pressure</h5>
                                {pressure}
                            </div>
                            <div className="col-md-12">
                                <div><hr></hr></div>
                            </div>
                            <div className="col-md-4">
                                <h5>Humidity</h5>
                                {humidity}
                            </div>
                            <div className="col-md-4">
                                <h5>Longitude</h5>
                                {lon}
                            </div>
                            <div className="col-md-4">
                                <h5>Latitude</h5>
                                {lat}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer styleFoot">
                        <h5>Wind Speed</h5>
                        <div>{speed}</div>
                    </div>
                </div>
            </div>
        );
    }
}
