import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

function SearchParams(Component) {
    return props => <Component {...props} params={useSearchParams()} />
}
class Users extends Component {
    render() {
        let [searchParams, setSearchParams] = this.props.params
        let showActiveUsers = searchParams.get('filter')==='active'
        return (
            <div>
                {/* <nav className='secondary-nav'>
                    <Link to='user1'>User 1</Link>
                    <Link to='user2'>User 2</Link>
                    <Link to='user3'>User 3</Link>
                </nav>*/}
                <Outlet /> 
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active users</button>
                <button onClick={() => setSearchParams({})}>Reset filter</button>
                {
                    showActiveUsers?<h2>Showing active users</h2>:<h2>Showing all users</h2>
                }

            </div>
        )
    }
}

export default SearchParams(Users)

// import React from 'react'
// import { useSearchParams } from 'react-router-dom'
// const Users = () => {
//     let [searchParams, setSearchParams] = useSearchParams();
//     let showActiveUsers = searchParams.get('filter') == 'active'
//     return (
//         <div>
//             <h1>User1</h1>
//             <h1>User2</h1>
//             <h1>User3</h1>
//             <button onClick={() => setSearchParams({ filter: 'active' })}>Active users</button>
//             <button onClick={() => setSearchParams({})}>Reset filter</button>
//             {
//                 showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
//             }
//         </div>
//     )
// }

// export default Users