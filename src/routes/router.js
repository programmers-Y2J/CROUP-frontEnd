import { createBrowserRouter } from 'react-router-dom';
import Room from '../pages/Room';
import Home from '../pages/Home';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'room/:roomId',
    element: <Room />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

export default router;
