import { createStore } from 'redux';

const initialState = {
  result: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
    case 'SUBTRACT':
    case 'MULTIPLY':
    case 'DIVIDE':
      return { ...state, result: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

  