import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

class Products extends Component {
    styles = {
        fontWeight:  'normal',
        color:'black' 
    }
    render() {
        
        return (
            <>
                <div>
                    <input type='search' placeholder='Search products' />
                </div>
                <nav >
                    <Link to={'featured'} style={this.styles}>Featured</Link>
                    <Link to={'new-products'} style={this.styles}>New</Link>

                </nav>
                <Outlet />
            </>
        )
    }
}

export default Products