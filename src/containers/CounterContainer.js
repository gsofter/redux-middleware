import React from 'react'
import Counter from '../components/Counter'
import { connect } from 'react-redux'
import { increase, decrease } from '../modules/counter'
const CounterContainer = ({ increase, decrease, number }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
}

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer)
