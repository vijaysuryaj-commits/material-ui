import React, { Component } from 'react';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    padding: '20px',
    margin: '0px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '1000px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.3)',
    padding: '20px',
    margin: 'auto',
  },
  heading: {
    fontSize: '30px',
    fontFamily: 'Times New Roman',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: '12px',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '20px',
  },
};

class WithStyles extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.heading}>Container</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem
            earum rerum ullam ipsum, quas eius placeat rem laudantium, eos
            possimus cupiditate? Non nemo aliquam cumque quas, soluta voluptatum
            repudiandae ab? Iure beatae atque assumenda expedita molestiae eius,
            ab distinctio reprehenderit recusandae quis, minus quod dolore quae
            omnis tempore, aliquid incidunt ipsum officia voluptatibus
            exercitationem minima alias...
          </p>
          <button className={classes.button}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WithStyles);
