import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
// if (process.env.NODE_ENV === 'development') {
//   configureStore = (initialState) => {
//     return createStore(
//       rootReducer,
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//       initialState,
//       applyMiddleware(thunk)
//     );
//   }
// } else {
//   configureStore = (initialState) => {
//     return createStore(
//       rootReducer,
//       initialState,
//       applyMiddleware(thunk)
//     )
//   }
// };
//
// export default configureStore;
