import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider, ListItemIcon, ListItemText, MenuList, Paper, Typography } from '@mui/material';
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material';

class MenuEx extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

    handleClick = (event: any) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        const { anchorEl }: any = this.state;
        const open = Boolean(anchorEl);

        return (
            // <div>
            //     <Button
            //         id="basic-button"
            //         aria-controls={open ? 'basic-menu' : undefined}
            //         aria-haspopup="true"
            //         aria-expanded={open ? 'true' : undefined}
            //         onClick={this.handleClick}
            //     >
            //         Dashboard
            //     </Button>
            //     <Menu
            //         id="basic-menu"
            //         anchorEl={anchorEl}
            //         open={open}
            //         onClose={this.handleClose}
            //         MenuListProps={{
            //             'aria-labelledby': 'basic-button',
            //         }}
            //     >
            //         <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            //         <MenuItem onClick={this.handleClose}>My account</MenuItem>
            //         <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            //     </Menu>
            // </div>

            <Paper sx={{ width: 320, maxWidth: '100%' }}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={this.handleClick}
                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    // anchorOrigin={{
                    //     vertical: 'top',
                    //     horizontal: 'left',
                    // }}
                    // transformOrigin={{
                    //     vertical: 'top',
                    //     horizontal: 'left',
                    // }}
                >
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCut fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Cut</ListItemText>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                ⌘X
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCopy fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Copy</ListItemText>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                ⌘C
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ContentPaste fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Paste</ListItemText>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                ⌘V
                            </Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <Cloud fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Web Clipboard</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Paper>
        );
    }
}

export default MenuEx;
