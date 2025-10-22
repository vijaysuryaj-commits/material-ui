import { Component } from 'react'
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
  root: (props) => ({
    backgroundColor: props.color || theme.palette.primary.main,
    color: 'white',
    padding: theme.spacing(2),
    border: 'none',
    cursor: 'pointer',
    fontSize: props.size === 'large' ? '20px' : '14px',
  }),
});

 class WithStyleThree extends Component {
    
  render() {
    const {classes} =this.props
    return (
      <button className={classes.root}>Click me</button>
    )
  }
}

export default withStyles(styles,{withTheme:true})(WithStyleThree)