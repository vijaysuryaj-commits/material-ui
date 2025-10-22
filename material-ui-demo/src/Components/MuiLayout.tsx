import { Component } from 'react'
import { Grid, Box } from '@mui/material'

class MuiLayout extends Component {
    render() {
        return (
            <>
                <Grid container my={4} spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Box bgcolor='primary.light' p={2}>Item 1</Box>
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <Box bgcolor='primary.light' p={2}>Item 2</Box>
                    </Grid>
                    <Grid item xs={6} lg={3}>
                        <Box bgcolor='primary.light' p={2}>Item 3</Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box bgcolor='primary.light' p={2}>Item 4</Box>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default MuiLayout