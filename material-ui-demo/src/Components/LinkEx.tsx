import { Component } from 'react'
import { Link, Stack } from '@mui/material'
export class LinkEx extends Component {
    render() {
        return (
            <>
                <Stack spacing={2} direction={'row'}>
                    <Link color={'secondary'}>Hello</Link>
                    <Link color={'primary.dark'}>World!</Link>

                    <Link color={'inherit'}>Hello</Link>
                    <Link variant='inherit'>Hello</Link>
                    <Link variant='body1'>Hello</Link>
                    <Link variant='body2'>Hello</Link>
                    <Link variant='h1' underline='hover'>Hello</Link>
                    <Link variant='h2' underline='always'>Hello</Link>
                    <Link variant='h3' underline='none'>Hello</Link>

                    <Link variant='h4'>Hello</Link>
                    <Link variant='h5'>Hello</Link>
                    <Link variant='h6'>Hello</Link>
                    <Link variant='subtitle1'>Hello</Link>
                    <Link variant='subtitle2'>Hello</Link>

                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                    >
                        Button Link
                    </Link>
                </Stack>


            </>
        )
    }
}

export default LinkEx