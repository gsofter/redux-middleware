import React from 'react'
import './App.css'
import CounterContainer from './containers/CounterContainer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer, { rootSaga } from './modules'
import { composeWithDevTools } from 'redux-devtools-extension'
// import loggerMiddleware from './lib/loggerMiddleware'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import SampleContainer from './containers/SampleContainer'
import createSagaMiddleware from 'redux-saga'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

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
