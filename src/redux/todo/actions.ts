import { ITodo } from './reducer';

export const BASE = '[TODO]' as const;
export const FETCH_TODOS = `${BASE} FETCH_TODOS` as const;
export const COMPLETE_TODO = `${BASE} COMPLETE_TODO` as const;
export const SET_TODOS = `${BASE} SET_TODOS` as const;

export interface FetchTodosAction {
    type: typeof FETCH_TODOS;
}

export const fetchTodos = (): FetchTodosAction => ({
    type: FETCH_TODOS,
});

export interface CompleteTodoAction {
    type: typeof COMPLETE_TODO;
    payload: {
        id: string;
    };
}

export const completeTodo = (id: string): CompleteTodoAction => ({
    type: COMPLETE_TODO,
    payload: { id },
});

export interface SetTodosAction {
    type: typeof SET_TODOS;
    payload: ITodo[];
}

export const setTodos = (todos: ITodo[]): SetTodosAction => ({
    type: SET_TODOS,
    payload: todos,
});
