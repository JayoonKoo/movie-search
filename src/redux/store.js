import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './modules/reducer'
import ReduxThunk from 'redux-thunk'


const store = createStore(reducer,composeWithDevTools(applyMiddleware(ReduxThunk)))

export default store
