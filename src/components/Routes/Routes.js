import React from 'react';
import Home from '../Pages/Home/Home';
import Main from '../Others/Layout/Main';
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import Services from '../Others/Services/Services';
import Blog from '../Pages/Blog/Blog';
import DetailsCard from '../Others/DetailsCard/DetailsCard';
import MyReviews from '../Pages/MyReviews/MyReviews';
import AddServices from '../Pages/AddServices/AddServices';
import Review from '../Pages/Review/Review';
import PrivateRoute from '../Routes/PrivateRoute'



const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>,
          loader: ()=> fetch('https://service-review-server-side-jet.vercel.app/services')
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        { 
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/services/:id',
          element:<DetailsCard></DetailsCard>,
          loader: ({params}) => fetch(`https://service-review-server-side-jet.vercel.app/services/${params.id}`)
        },
        {
          path:'/review/:id',
          element:<Review></Review>,
          loader:({params}) => fetch(`https://service-review-server-side-jet.vercel.app/services/${params.id}`)
        },
        {
          path: '/addservices',
          element: <AddServices></AddServices>
        },
        {
          path: '/myreviews',
          element: <MyReviews></MyReviews>
        }
      ]
    }
  ]);

  export default router;