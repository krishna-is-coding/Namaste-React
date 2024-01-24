import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componets/Header';
import Body from './componets/Body';
//import About from './componets/About';
import Contact from './componets/Contact';
import Error from './componets/Error';
import RestaurantMenu from './componets/RestaurantMenu';
import { createBrowserRouter , RouterProvider,Outlet} from 'react-router-dom';


const Grocery = lazy(()=>import("./componets/Grocery"));

const About= lazy(()=>import("./componets/About"));
const AppLayout = () =>{
  return(
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element:<Body />,
      },
      {
        path: "/about",
        element:(
          <Suspense fallback={<h1>Loding..........</h1>}>
            <About />,
          </Suspense>
          )
      },
      {
        path: "/contact",
        element:<Contact />,
      },
      {
        path: "/grocery",
        element:(
          <Suspense fallback={<h1>Loding..........</h1>}>
            <Grocery />,
          </Suspense>
          )
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu />,
      },
      
 ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);