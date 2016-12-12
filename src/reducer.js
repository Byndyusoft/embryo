import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './features/auth/reducer';

export default combineReducers({
    routing: routerReducer,
    auth: authReducer
});
