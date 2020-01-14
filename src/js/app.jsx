import React from 'react';
import CurrentCity from "./components/CurrentCity"
import SearchCity from './components/SearchCity'
import SearchHistory from "./components/SearchHistory"
import TitleHeader from "./components/TitleHeader"

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
          <TitleHeader />
        <div className="row">
          <SearchCity />
        </div>
        <div className="row">
          <div className="col-md-7">
            <p></p>
            <CurrentCity />
          </div>
          <div className="col-md-5">
            <br></br>
            <br></br>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
