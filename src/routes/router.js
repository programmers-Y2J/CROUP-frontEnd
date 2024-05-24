import { createBrowserRouter } from 'react-router-dom';
import Room from '../pages/Room';
import Home from '../pages/Home';
import PostDetail from '../components/Modal/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'room/:roomId',
    element: <Room />,
    children: [
      {
        path: 'post/:questionId',
        element: <PostDetail />,
      },
    ],
  },
]);

export default router;
