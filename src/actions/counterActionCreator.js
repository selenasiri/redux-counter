const increment = () => {
  return {
    type: 'counter/increment',
  }
}

const decrement = () => {
  return {
    type: 'counter/decrement',
  }
}

const incrementByAmount = (amount) => {
  return {
    type: 'counter/incrementByAmount',
    payload: amount,
  }
}

const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export { increment, decrement, incrementByAmount, incrementAsync }
