import { combineReducers } from 'redux';
import SearchCityReducer from './components/SearchCity/SearchCityReducer';

const rootReducer = combineReducers({
// add reducers
    search: SearchCityReducer

});

export default rootReducer;
