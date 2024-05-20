import { createBrowserRouter } from 'react-router-dom';
import Room from '../pages/Room';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Home />,
  // },
  {
    path: 'room/:roomId',
    element: <Room />,
  },
]);

export default router;
