// // import React, { Component } from 'react'
// // import { useAuth } from '../utils/Auth'
// // import { useNavigate } from 'react-router-dom';

// // function ProfileWrapper(Component) {
// //     return function WrappedComponent(props) {
// //         const auth = useAuth();
// //         const navigate = useNavigate();
// //         return  <Component {...props} auth={auth} navigate={navigate} />
// //     }
// // }


// // class Profile extends Component {
// //     handleLogout = () => {
// //         this.props.auth.logout()
// //         this.props.navigate('/')
// //     }
// //     render() {
// //         return (
// //             <div>
// //                 Welcome!, {this.props.auth.user}
// //                 <button onClick={this.handleLogout}>Logout</button>
// //             </div>
// //         )
// //     }
// // }

// // export default ProfileWrapper(Profile)


























// import React, { Component } from 'react'
// import { useAuth } from '../utils/Auth'
// import { Paper } from '@mui/material';
// import Button from '@mui/material/Button';
// import { Box, Stack, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// function ProfileWrapper(Component) {
//     return function WrappedComponent(props) {
//         let auth = useAuth();
//         let navigate = useNavigate()
//         return <Component {...props} auth={auth} navigate={navigate}/>
//     }
// }

// class Profile extends Component {
//     handleLogout = () =>{
//         this.props.auth.logout()
//         this.props.navigate('/')
//     }
//     render() {
//         return (
//             <Box
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     height: '100vh',
//                     backgroundColor: '#f5f5f5',
//                 }}>
//                 <Paper elevation={3}
//                     sx={{ padding: 4, minWidth: 300 }}>
//                     <Stack spacing={2} direction={'column'} alignItems="center">
//                         <Typography variant='h3'>Welcome!, {this.props.auth.user}</Typography>
//                         <Button onClick = {this.handleLogout}variant='contained' color='primary'>Logout</Button>
//                     </Stack>
//                 </Paper>
//             </Box>
//         )
//     }
// }

// export default ProfileWrapper(Profile)

//instead of making a function call with class comp passed as a parameter and returning another functional component wrapping the class comp theres another way to do it
import React, { Component } from 'react'
import { useAuth } from '../utils/Auth'
import { Paper, Button, Box, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


function ProfileWrapper() {
    const auth = useAuth()
    const navigate = useNavigate()
    return <Profile auth={auth} navigate={navigate} />
}


class Profile extends Component {
    handleLogout = () => {
        this.props.auth.logout()
        this.props.navigate('/')
    }

    render() {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Paper elevation={3} sx={{ padding: 4, minWidth: 300 }}>
                    <Stack spacing={2} direction={'column'} alignItems="center">
                        <Typography variant="h3">
                            Welcome!, {this.props.auth.user}
                        </Typography>
                        <Button
                            onClick={this.handleLogout}
                            variant="contained"
                            color="primary"
                        >
                            Logout
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        )
    }
}

export default ProfileWrapper
