import React from 'react'

const Counter = ({ onIncrease, onDecrease, number }) => {
  const handleIncrease = (event) => {
    event.persist()
    onIncrease()
  }

  const handleDecrease = (event) => {
    event.persist()
    onDecrease()
  }

  return (
    <div>
      <h1> {number} </h1>
      <button onClick={handleIncrease}> +1 </button>
      <button onClick={handleDecrease}> -1 </button>
    </div>
  )
}

export default Counter
