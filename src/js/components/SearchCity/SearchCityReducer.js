const defaultState = {
    city: '',
    temperatureMin: '',
    temperatureMax: '',
    pressure: '',
    humidity: '',
    speed: '',
    lat: '',
    lon: '',
    history: [],
  };
  
  export default function SearchCityReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
     
      case 'GET_WEATHER!_FULFILLED': {
        return {
            ...state,
            city: payload.data.name,
            temperatureMax: payload.data.main.temp_max + "(f)",
            temperatureMin: payload.data.main.temp_min + "(f)",
            pressure: payload.data.main.pressure + "(Pa)",
            humidity: payload.data.main.humidity + "%",
            speed: payload.data.wind.speed + "(mph)",
            lat: payload.data.coord.lat + "º",
            lon: payload.data.coord.lon + "º",
            history: [...state.history,{
                  city: payload.data.name,
                }]
        };
      }
  
      case 'GET_WEATHER-REJECTED': {
        return {
          ...state,
          error: "wrong"
        };
      }
  
      case 'UPDATE_CITY': {
        return {
          ...state,
          city: payload.city
        };
      }
  
      default: {
        return state;
      }
    }
  }