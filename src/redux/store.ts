import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import todoMiddlewares from './todo/middleware';
import apiMiddlewares from './api/middleware';
import todoReducer from './todo/reducer';

const rootReducer = combineReducers({
    todos: todoReducer,
});

const middlewareEnhancer = applyMiddleware(
    ...todoMiddlewares,
    ...apiMiddlewares
);

const composeEnhancers =
    typeof window !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));

export default store;
