import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import TodoList from './containers/container'                //import container as Todolist
import rootReducer from './reducers/rootReducer.js'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger' 

const middleware = [thunk,logger]
const store = createStore(rootReducer, applyMiddleware(...middleware))
const App = () => (
    <Provider store={store}>
        <TodoList/>
    </Provider>

)



export default App;
