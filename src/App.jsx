import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import MainLayouts from './layouts/MainLayouts';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
