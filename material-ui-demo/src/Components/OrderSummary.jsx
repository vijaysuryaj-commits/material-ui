import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

class OrderSummary extends Component {
    navigate =()=>{
        // this.props.navigate('/');
        this.props.navigate(-1);

    }
    render() {
        return (
            <>
                <div>Order confirmed!</div>
                <button onClick={this.navigate}> Go back!</button>
            </>
        )
    }
}

function OrderSummaryWrapper(props){
    const navigate=useNavigate();
    return <OrderSummary {...props} navigate ={navigate} />
}

export default OrderSummaryWrapper