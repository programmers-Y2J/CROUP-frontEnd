import { createBrowserRouter } from 'react-router-dom';
import Room from '../pages/Room';
import Home from '../pages/Home';
import PostDetail from '../components/Modal/Room/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'rooms/:roomId',
    element: <Room />,
    children: [
      {
        path: 'question/:questionId',
        element: <PostDetail />,
      },
    ],
  },
]);

export default router;
