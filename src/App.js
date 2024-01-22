import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componets/Header';
import Body from './componets/Body';
import About from './componets/About';
import Contact from './componets/Contact';
import Error from './componets/Error';
import RestaurantMenu from './componets/RestaurantMenu';
import { createBrowserRouter , RouterProvider,Outlet} from 'react-router-dom';
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
        element:<About />,
      },
      {
        path: "/contact",
        element:<Contact />,
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