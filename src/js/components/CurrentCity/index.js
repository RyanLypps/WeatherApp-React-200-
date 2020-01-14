import { connect } from 'react-redux';    
import CurrentCity from './CurrentCity';


function mapStoreToProps(store) {
    return {
      city: store.search.city,
      temperatureMax: store.search.temperatureMax,
      temperatureMin: store.search.temperatureMin,
      pressure: store.search.pressure,
      humidity: store.search.humidity,
      speed: store.search.speed,
      lat: store.search.lat,
      lon: store.search.lon,
    };
  }

export default connect(mapStoreToProps)(CurrentCity)