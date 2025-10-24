import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './Navbar.css'
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
                <nav className='secondary-nav' >
                    {/* <Link to={'/products/featured'} style={this.styles}>Featured</Link> absolute path */}
                    <Link to={'featured'} style={this.styles}>Featured</Link> {/*relative links it constructs url based on closest route its rendered ->/products, but if you add just /featured it appends it to the root url*/}
                    <Link to={'new-products'} style={this.styles}>New</Link>

                </nav>
                <Outlet />
            </>
        )
    }
}

export default Products