import React, { useEffect } from 'react';

import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

import Todo from './components/Todo';

import AppBar from './components/AppBar';
import { useAppDispatch, useAppSelector } from './redux';
import { fetchTodos } from './redux/todo/actions';

export default function App() {
    const todos = useAppSelector(state => state.todos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div>
            <AppBar />
            <Container maxWidth="sm">
                <List
                    subheader={
                        <ListSubheader component="div">Todos</ListSubheader>
                    }
                >
                    {todos.map(({ id, title, completed }) => (
                        <Todo key={id} title={title} completed={completed} />
                    ))}
                </List>
            </Container>
        </div>
    );
}
