import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

type TodoProps = {
    title: string;
    completed: boolean;
};

export default function Todo({ title, completed }: TodoProps) {
    return (
        <ListItem disablePadding dense>
            <ListItemButton>
                <ListItemText
                    primary={title}
                    secondary={completed ? 'COMPLETED' : 'IN PROGRESS'}
                />
            </ListItemButton>
        </ListItem>
    );
}
