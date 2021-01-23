import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payLoad) => {
    setState({
      ...state,
      cart: [...state.cart, payLoad],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state.cart,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
