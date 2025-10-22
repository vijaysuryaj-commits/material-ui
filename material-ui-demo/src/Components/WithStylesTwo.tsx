import React, { Component } from 'react'
import { withStyles } from '@mui/styles'

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
    },
});
class WithStylesTwo extends Component {
    render() {
        const { classes } = this.props
        return (
            <button className={classes.root}>Click</button>
        )
    }
}



export default withStyles(styles, { withTheme: true })(WithStylesTwo)