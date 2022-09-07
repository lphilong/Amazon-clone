import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Login/Login';
import ProductDetail from '../Pages/ProductDetails';
import SalePage from '../Pages/SalePage';
import SignUp from '../Pages/SignUp/SignUp';

const publicRoutes = [
    {
        path: '/',
        element: HomePage,
    },
    {
        path: '/login',
        element: Login,
        layout: null,
    },
    {
        path: '/signup',
        element: SignUp,
        layout: null,
    },
    {
        path: '/sp',
        element: SalePage,
        layout: null,
    },
    {
        path: '/sp/:id',
        element: ProductDetail,
        layout: null,
    },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
