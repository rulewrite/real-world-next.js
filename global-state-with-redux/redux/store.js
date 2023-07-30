import { useMemo } from 'react';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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

const initStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};

let store;

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  // Redux를 서버 사이드에서 초기화하는 경우 _store를 반환
  if (typeof windwow === 'undefined') {
    return _store;
  }

  if (!store) {
    store = _store;
  }
  return _store;
};

export const useStore = (initialState) => {
  return useMemo(() => {
    return initializeStore(initialState);
  }, [initialState]);
};
