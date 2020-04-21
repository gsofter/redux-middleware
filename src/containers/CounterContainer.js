import React from 'react'
import Counter from '../components/Counter'
import { connect } from 'react-redux'
// import { increase, decrease } from '../modules/counter'
import { increaseAsync, decreaseAsync } from '../modules/counter'

const CounterContainer = ({ increaseAsync, decreaseAsync, number }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  )
}

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  },
)(CounterContainer)
