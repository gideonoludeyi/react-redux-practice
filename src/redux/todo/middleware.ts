import type { Middleware } from 'redux';
import { apiRequest, BASE } from '../api/middleware';
import { FetchTodosAction, FETCH_TODOS, setTodos } from './actions';
import type { ITodo } from './reducer';

const FETCH_TODOS_SUCCESS = `${BASE} FETCH_TODOS_SUCCESS` as const;

interface FetchTodosSuccessAction {
    type: typeof FETCH_TODOS_SUCCESS;
    payload: ITodo[];
}

type TodoMiddlewareAction = FetchTodosAction | FetchTodosSuccessAction;

const todoMiddleware: Middleware =
    ({ dispatch }) =>
    next =>
    (action: TodoMiddlewareAction) => {
        next(action);
        switch (action.type) {
            case FETCH_TODOS:
                const url = `${import.meta.env.VITE_API_URL}/todos`;
                dispatch(
                    apiRequest({ url }, { onSuccess: FETCH_TODOS_SUCCESS })
                );
                break;

            case FETCH_TODOS_SUCCESS:
                const todos = action.payload;
                dispatch(setTodos(todos));
                break;
        }
    };

export default [todoMiddleware];
