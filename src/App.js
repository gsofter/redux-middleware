import React from 'react'
import './App.css'
import CounterContainer from './containers/CounterContainer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'
import { composeWithDevTools } from 'redux-devtools-extension'
// import loggerMiddleware from './lib/loggerMiddleware'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import SampleContainer from './containers/SampleContainer'

const logger = createLogger()

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SampleContainer />
      </div>
    </Provider>
  )
}

export default App
