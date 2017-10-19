import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const configureStore = () => {
  const store = createStore(reducer, composeWithDevTools());

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducer));
  }

  return store;
};

export default configureStore;
