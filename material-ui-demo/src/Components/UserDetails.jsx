import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

function getParams(Component){
    return props => <Component {...props} params = {useParams()} />
}
class UserDetails extends Component {
  render() {
    const {userId} = this.props.params    
    return (
      <div>User {userId} Details page </div>
    )
  }
}

export default getParams(UserDetails)

//functional component variation

//  const UserDetails = () => {
//     let params = useParams();
//     let {userId} = params
//   return (
//     <div>User {userId} details page</div>
//   )
// }
// export default UserDetails