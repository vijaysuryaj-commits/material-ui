// // // import MuiButton from "./Components/MuiButton"

// // // import BoxEx from "./Components/BoxEx"
// // import UseMediaQueryEx from "./Components/UseMediaQueryEx"
// // import LinkEx from "./Components/LinkEx"
// // import MenuEx from "./Components/MenuEx"
// // import SkeletonEx from "./Components/SkeletonEx"
// // import CustomThemeExample from "./Components/CreateThemeEx"

// // // import MuiTypography from "./Components/MuiTypography"
// // // import { MuiTextField } from "./Components/MuiTextField"
// // // import MakeStyles from './Components/MakeStyles'
// // // import WithStyles from './Components/WithStyles'
// // // import WithStylesTwo from './Components/WithStylesTwo'
// // // import WithStyleThree from './Components/WithStyleThree';
// // // import { ThemeProvider} from '@mui/styles'
// // // import { createTheme } from '@mui/material/styles';
// // // import CheckBoxLabels from './Components/Checkbox';
// // // import MuiLayout from './Components/MuiLayout';
// // // import RadioButtonsGroup from './Components/RadioGroupEx'
// // // import SimplePaper from "./Components/PaperEx"
// // // import BasicPagination from "./Components/PaginationEx"
// // // import BasicSelect from "./Components/SelectEx"
// // // import DividerEx from "./Components/DividerEx"
// // // import TableEx from "./Components/TableEx"

// // function App() {
// //   // const theme = createTheme();
// //   // console.log(theme)
// //   return (
// //     <>
// //       {/* <MuiTypography /> */}
// //       {/* <MuiButton /> */}
// //       {/* <MuiTextField /> */}
// //       {/* <MakeStyles /> */}
// //       {/* <WithStyles /> */}
// //       {/* <ThemeProvider theme={theme}> */}
// //         {/* <WithStylesTwo /> */}
// //         {/* <WithStyleThree color='red' size='large'/>
// //         <WithStyleThree color ='green' />
// //         <WithStyleThree /> */}

// //       {/* </ThemeProvider> */}
// //       {/* <MuiLayout /> */}
// //       {/* <CheckBoxLabels /> */}
// //       {/* <RadioButtonsGroup /> */}
// //       {/* <SimplePaper /> */}
// //       {/* <BasicPagination /> */}
// //       {/* <BasicSelect /> */}
// //       {/* <DividerEx /> */}
// //       {/* <TableEx /> */}
// //       {/* <BoxEx /> */}
// //       <UseMediaQueryEx />
// //       <LinkEx />
// //       <MenuEx/>
// //       <SkeletonEx />
// //       <CustomThemeExample ></CustomThemeExample>
// //     </>
// //   )
// // }

// // export default App


// //routing
// import './App.css'
// import Home from './Components/Home'
// import { Routes, Route } from 'react-router-dom'
// // import About from './Components/About'
// import React from 'react'
// import Navbar from './Components/Navbar'
// import OrderSummary from './Components/OrderSummary'
// import NoMatch from './Components/NoMatch'
// import Products from './Components/Products'
// import Featuredproducts from './Components/Featuredproducts'
// import NewProducts from './Components/NewProducts'
// import Users from './Components/Users'
// import UserDetails from './Components/UserDetails'
// import Admin from './Components/Admin'
// import Profile from './Components/Profile'
// const LazyAbout = React.lazy(()=> import('./Components/About') )


// const App = () => {
//   return (
//     <div >
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         {/* <Route path='/about' element={<About />} /> */}
//         <Route path='/about' element={<React.Suspense fallback={'loading...'}><LazyAbout /></React.Suspense>} />

//         <Route path='/order-summary' element={<OrderSummary />} />
//         <Route path='/products' element={<Products />}>
//           <Route index element={<Featuredproducts />} /> {/*index route when you want to render a child route at parent route level*/}
//           <Route path='featured' element={<Featuredproducts />} />
//           {/* <Route path='/featured' element={<Featuredproducts />} /> error -> if you re using absolute path use it fully like /products/featured */}
//           <Route path='new-products' element={<NewProducts />} />
//         </Route>
//         <Route path='users' element={<Users />} >
//           <Route path=':userId' element={<UserDetails />} />    {/*react first matches specific routes if not found then dynamic routes are matched */}
//           <Route path='admin' element={<Admin /> } />     {/*here  /users/admin renders Admin component if it's not found then /users/:userId renders UserDetails component */}
//         </Route>
//         <Route path='profile' element={<Profile />} /> 
//         <Route path='*' element={<NoMatch />} />
//       </Routes>
//     </div>
//   )
// }
// export default App


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
// import './App.css'
// import Home from './Components/Home'
// import { Routes, Route } from 'react-router-dom'
// // import About from './Components/About'
// import React from 'react'
// import Navbar from './Components/Navbar'
// import OrderSummary from './Components/OrderSummary'
// import NoMatch from './Components/NoMatch'
// import Products from './Components/Products'
// import Featuredproducts from './Components/Featuredproducts'
// import NewProducts from './Components/NewProducts'
// import Users from './Components/Users'
// import UserDetails from './Components/UserDetails'
// import Admin from './Components/Admin'
// import Profile from './Components/Profile'
// import { AuthProvider } from './utils/Auth'
// import Login from './Routes/Login'
// const LazyAbout = React.lazy(()=> import('./Components/About') )


// const App = () => {
//   return (
//     <AuthProvider >
//     <div >
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         {/* <Route path='/about' element={<About />} /> */}
//         <Route path='/about' element={<React.Suspense fallback={'loading...'}><LazyAbout /></React.Suspense>} />

//         <Route path='/order-summary' element={<OrderSummary />} />
//         <Route path='/products' element={<Products />}>
//           <Route index element={<Featuredproducts />} /> {/*index route when you want to render a child route at parent route level*/}
//           <Route path='featured' element={<Featuredproducts />} />
//           {/* <Route path='/featured' element={<Featuredproducts />} /> error -> if you re using absolute path use it fully like /products/featured */}
//           <Route path='new-products' element={<NewProducts />} />
//         </Route>
//         <Route path='users' element={<Users />} >
//           <Route path=':userId' element={<UserDetails />} />    {/*react first matches specific routes if not found then dynamic routes are matched */}
//           <Route path='admin' element={<Admin /> } />     {/*here  /users/admin renders Admin component if it's not found then /users/:userId renders UserDetails component */}
//         </Route>
//         <Route path='profile' element={<Profile />} /> 
//         <Route path='login' element={<Login />} /> 

//         <Route path='*' element={<NoMatch />} />
//       </Routes>
//     </div>
//     </AuthProvider>
//   )
// }
// export default App



























// import { AuthProdvider } from './utils/Auth'
// import Home from './Components/Home'
// import { Routes, Route } from 'react-router-dom'
// import About from './Components/About'
// import Navbar from './Components/Navbar'
// import Profile from './Components/Profile'
// import Login from './Routes/Login'
// import Products from './Components/Products'
// import Featuredproducts from './Components/Featuredproducts'
// import RequireAuth from './utils/RequireAuth'
// import ErrorBoundary from './Components/ErrorBoundary'
// import ErrorComponent from './Components/ErrorComponent'
// const App = () => {
//   return (
//     <AuthProdvider>
//       <Navbar />
//       <ErrorBoundary>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='about' element={<About />} />
//           <Route path='products' element={<Products />} >
//             <Route path='featured' element={<Featuredproducts />} />
//           </Route>
//           <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
//           <Route path='login' element={<Login />} />
//           <Route path='/crash' element={<ErrorComponent />} />
//         </Routes>
//       </ErrorBoundary>
//     </AuthProdvider>
//   )
// }

// export default App
// import Button  from "./TypeScriptEx/PropsTypes";
// import Counter from "./TypeScriptEx/StateType";
// const App = () => {
//   return (
//     <div>
//       <Button label="Click Me" onClick={() => alert("Clicked!")} />
//       <Button label="Disabled" onClick={() => {}} disabled />
//         <Counter />
//     </div>
//   );
// };

// export default App;

//axios


// import PostsList from './Components/PostsList'

import './App.css'
import PostForm from './Components/PostForm'
function App() {
  
  return (
    <div>
      {/* <PostsList /> */}
      <PostForm />
    </div>
  )
}

export default App