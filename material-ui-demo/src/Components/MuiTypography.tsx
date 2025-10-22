import { Typography } from '@mui/material'
const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>H1 heading</Typography>
            <Typography variant='h2'>H2 heading</Typography>
            <Typography variant='h3'>H3 heading</Typography>
            <Typography variant='h4'>H4 heading</Typography>
            <Typography variant='h4' gutterBottom>H4 heading with gutterbottom</Typography> {/*adds bottom margin to the element, value depends on the variant higher variant have more margin than lower variants*/}
            <Typography variant='h5'>H5 heading</Typography>
            <Typography variant='h6'>H6 heading</Typography>

            <Typography variant='subtitle1'>Subtitle 1 </Typography>
            <Typography variant='subtitle2'>Subtitle 2</Typography>

            <Typography variant='body1'>    {/* body1 is the default value for variant attribute*/}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum possimus aliquid fuga velit! Facere vero neque nostrum illo provident nesciunt,
                ea eius quasi consectetur ut corrupti sapiente qui dolores hic!
            </Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, reiciendis impedit ut velit, fugit, aperiam ullam quam iusto dicta vel dolore! Eius libero cupiditate voluptas illo eligendi doloribus ratione alias? </Typography>
            
            <Typography >    {/* body1 is the default value for variant attribute*/}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum possimus aliquid fuga velit! Facere vero neque nostrum illo provident nesciunt,
                ea eius quasi consectetur ut corrupti sapiente qui dolores hic!
            </Typography>

            <Typography variant='h4' component='h1'>Lorem, ipsum.</Typography> {/*same style as h4 but the tag used is h1 this is important for semantics*/}
        </div>
    )
}
export default MuiTypography