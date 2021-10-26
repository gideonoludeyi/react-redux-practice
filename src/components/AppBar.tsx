import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

type MyAppBarProps = {
    CreateDialogComponent?: (props: {
        open: boolean;
        onClose: () => void;
    }) => JSX.Element;
};

export default function MyAppBar({ CreateDialogComponent }: MyAppBarProps) {
    // const createComponent = CreateDialogComponent && (
    //     <>
    //         <CreateDialogComponent
    //             open={createDialogVisibility}
    //             onClose={closeCreateDialog}
    //         />
    //         <IconButton
    //             size="large"
    //             aria-haspopup="true"
    //             color="inherit"
    //             onClick={openCreateDialog}
    //         >
    //             <AddIcon />
    //         </IconButton>
    //     </>
    // );

    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                    flexGrow={1}
                >
                    App
                </Typography>

                <IconButton size="large" color="inherit">
                    <SearchIcon />
                </IconButton>

                {/* {createComponent} */}

                <IconButton size="large" color="inherit">
                    <NotificationsNoneIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
