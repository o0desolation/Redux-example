import {combineReducers} from 'redux' 
import inputValue from './inputReducer' 
import list from './listReducer' 

const rootReducer = combineReducers({
    inputValue,
    list
})


export default rootReducer
