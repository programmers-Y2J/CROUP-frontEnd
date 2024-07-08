import { createBrowserRouter } from 'react-router-dom';
import QuestionPost from '@/components/Room/Question/QuestionPost';
import Chat from '@/components/Room/Chat/Chat';
import Room from '../pages/Room';
import Home from '../pages/Home';
import Layout from '../components/Common/Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import QuestionDetail from '../components/Room/Question/QuestionDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: 'rooms/:roomId',
        element: <Room />,
        children: [
          { path: 'question/:questionId', element: <QuestionDetail /> },
          { path: 'chat', element: <Chat /> },
          { path: 'post-question', element: <QuestionPost /> },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
