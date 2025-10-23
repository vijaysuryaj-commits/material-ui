// import * as React from 'react';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';

// import  { Component } from 'react'

// class SkeletonEx extends Component {
//   render() {
//     return (
//       <Stack spacing={1}>
//       {/* For variant="text", adjust the height usingfont-size */}
//       <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={210} />

//       {/* For other variants, adjust the size with `width` and `height` */}
//       <Skeleton variant="circular" width={40} height={40} />
//       <Skeleton variant="rectangular" width={210} height={60} />
//       <Skeleton variant="rounded" animation={'wave'} width={210} height={60} />
//       <Skeleton variant="rounded" animation={false} width={210} height={60} />

//     </Stack>
//     )
//   }
// }

// export default SkeletonEx

// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Skeleton from '@mui/material/Skeleton';

// const data = [
//   {
//     src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
//     title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
//     channel: 'Don Diablo',
//     views: '396k views',
//     createdAt: 'a week ago',
//   },
//   {
//     src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
//     title: 'Queen - Greatest Hits',
//     channel: 'Queen Official',
//     views: '40M views',
//     createdAt: '3 years ago',
//   },
//   {
//     src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
//     title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
//     channel: 'Calvin Harris',
//     views: '130M views',
//     createdAt: '10 months ago',
//   },
// ];

// function Media() {
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); 
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);
  
//   return (
//     <Grid container wrap="nowrap">
//       {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
//         <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
//           {item ? (
//             <img
//               style={{ width: 210, height: 118 }}
//               alt={item.title}
//               src={item.src}
//             />
//           ) : (
//             <Skeleton variant="rectangular" width={210} height={118} />
//           )}
//           {item ? (
//             <Box sx={{ pr: 2 }}>
//               <Typography gutterBottom variant="body2">
//                 {item.title}
//               </Typography>
//               <Typography
//                 variant="caption"
//                 sx={{ display: 'block', color: 'text.secondary' }}
//               >
//                 {item.channel}
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//                 {`${item.views} • ${item.createdAt}`}
//               </Typography>
//             </Box>
//           ) : (
//             <Box sx={{ pt: 0.5 }}>
//               <Skeleton />
//               <Skeleton width="60%" />
//             </Box>
//           )}
//         </Box>
//       ))}
//     </Grid>
//   );
// }

// export default function YouTube() {
//   return (
//     <Box sx={{ overflow: 'hidden' }}>
//       <Media />
//     </Box>
//   );
// }

import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // initially show skeleton
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ loading: false }); // hide skeleton after 2 seconds
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { loading } = this.state;

    return (
      <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            {item ? (
              <img
                style={{ width: 210, height: 118 }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )}

            {item ? (
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: 'block', color: 'text.secondary' }}
                >
                  {item.channel}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    );
  }
}

export default class YouTube extends Component {
  render() {
    return (
      <Box sx={{ overflow: 'hidden' }}>
        <Media />
      </Box>
    );
  }
}
