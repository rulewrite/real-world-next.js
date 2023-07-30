const initialState = {};

const reducer = (state = initialState, action) => {
  const itemID = action.id;

  switch (action.type) {
    case 'INCREMENT': {
      const amount = itemID in state ? state[itemID] + 1 : 1;
      return {
        ...state,
        [itemID]: amount,
      };
    }

    case 'DECREMENT': {
      const currentAmount = state[itemID];
      if (currentAmount > 0) {
        return {
          ...state,
          [itemID]: currentAmount - 1,
        };
      }

      return state;
    }

    default: {
      return state;
    }
  }
};
