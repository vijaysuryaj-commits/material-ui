import React, { Component } from 'react'
import { replace, useNavigate } from 'react-router-dom';

class Home extends Component {
  navigate = () => {
    this.props.navigate('/order-summary');
    // this.props.navigate('/order-summary', { replace: true }); //instead of pushing the history this replaces the history 

  }
  render() {
    return (
      <>
        <div>Home page</div>
        <button onClick={this.navigate}>place order </button>
      </>
    )
  }
}
function HomeWrapper(props) {
  const navigate = useNavigate();
  return <Home {...props} navigate={navigate} />
}
export default HomeWrapper