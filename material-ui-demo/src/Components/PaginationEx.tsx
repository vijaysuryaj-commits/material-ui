import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PaginationItem } from '@mui/material';
import { Component } from 'react';

class  BasicPagination extends Component {
    render(){
    return (
        <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color="primary" />
            <Pagination count={10} variant='outlined' color="secondary" />
            <Pagination count={10} shape='rounded' size='large' color="secondary" />

            <Pagination count={10} disabled />

            <Pagination count={10} showFirstButton showLastButton />
            <Pagination count={10} hidePrevButton hideNextButton />

            <Stack spacing={2}>
                <Pagination
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />

                <Pagination count={11} defaultPage={6} siblingCount={0} />
                <Pagination count={11} defaultPage={6} siblingCount={1} />

                <Pagination count={11} defaultPage={6} />
                <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
                <Pagination count={11} defaultPage={6} boundaryCount={2} />
            </Stack>
        </Stack>
    );
}
}
export default BasicPagination
