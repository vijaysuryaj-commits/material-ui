// import * as React from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';

// export default function UseMediaQueryEx() {
//   const matches = useMediaQuery('(min-width:600px)');

//   return <span>{`(min-width:600px) matches: ${matches}`}</span>;
// }


import { useMediaQuery } from '@mui/material'
const UseMediaQueryEx = () => {
    const isSmallSize = useMediaQuery('(max-width:600px)')
    return (
        <div>
            {
                isSmallSize?<h3>Small screen</h3>:<h1>Large Screen</h1>
            }
        </div>
    )
}

export default UseMediaQueryEx