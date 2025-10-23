// // import MuiButton from "./Components/MuiButton"

// // import BoxEx from "./Components/BoxEx"
// import UseMediaQueryEx from "./Components/UseMediaQueryEx"
// import LinkEx from "./Components/LinkEx"
// import MenuEx from "./Components/MenuEx"
// import SkeletonEx from "./Components/SkeletonEx"
// import CustomThemeExample from "./Components/CreateThemeEx"

// // import MuiTypography from "./Components/MuiTypography"
// // import { MuiTextField } from "./Components/MuiTextField"
// // import MakeStyles from './Components/MakeStyles'
// // import WithStyles from './Components/WithStyles'
// // import WithStylesTwo from './Components/WithStylesTwo'
// // import WithStyleThree from './Components/WithStyleThree';
// // import { ThemeProvider} from '@mui/styles'
// // import { createTheme } from '@mui/material/styles';
// // import CheckBoxLabels from './Components/Checkbox';
// // import MuiLayout from './Components/MuiLayout';
// // import RadioButtonsGroup from './Components/RadioGroupEx'
// // import SimplePaper from "./Components/PaperEx"
// // import BasicPagination from "./Components/PaginationEx"
// // import BasicSelect from "./Components/SelectEx"
// // import DividerEx from "./Components/DividerEx"
// // import TableEx from "./Components/TableEx"

// function App() {
//   // const theme = createTheme();
//   // console.log(theme)
//   return (
//     <>
//       {/* <MuiTypography /> */}
//       {/* <MuiButton /> */}
//       {/* <MuiTextField /> */}
//       {/* <MakeStyles /> */}
//       {/* <WithStyles /> */}
//       {/* <ThemeProvider theme={theme}> */}
//         {/* <WithStylesTwo /> */}
//         {/* <WithStyleThree color='red' size='large'/>
//         <WithStyleThree color ='green' />
//         <WithStyleThree /> */}

//       {/* </ThemeProvider> */}
//       {/* <MuiLayout /> */}
//       {/* <CheckBoxLabels /> */}
//       {/* <RadioButtonsGroup /> */}
//       {/* <SimplePaper /> */}
//       {/* <BasicPagination /> */}
//       {/* <BasicSelect /> */}
//       {/* <DividerEx /> */}
//       {/* <TableEx /> */}
//       {/* <BoxEx /> */}
//       <UseMediaQueryEx />
//       <LinkEx />
//       <MenuEx/>
//       <SkeletonEx />
//       <CustomThemeExample ></CustomThemeExample>
//     </>
//   )
// }

// export default App


//routing

import Home from './Components/Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Navbar from './Components/Navbar'
import OrderSummary from './Components/OrderSummary'
import NoMatch from './Components/NoMatch'
import Products from './Components/Products'
import Featuredproducts from './Components/Featuredproducts'
import NewProducts from './Components/NewProducts'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='/products' element={<Products />}>
        <Route path='featured' element={<Featuredproducts />} />
        <Route path='new-products' element={<NewProducts />} />

        </Route>

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}
export default App