import React from 'react'
import './App.css'
import CounterContainer from './containers/CounterContainer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './modules'
import { composeWithDevTools } from 'redux-devtools-extension'
// import loggerMiddleware from './lib/loggerMiddleware'
import { createLogger } from 'redux-logger'
const logger = createLogger()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
      </div>
    </Provider>
  )
}

export default App
