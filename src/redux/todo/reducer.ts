import { Reducer } from 'redux';
import { SetTodosAction, SET_TODOS } from './actions';

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type TodoState = ITodo[];

const initialState: TodoState = [];

type TodoReducerAction = SetTodosAction;

const reducer: Reducer<TodoState, TodoReducerAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
