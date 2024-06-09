import { createBrowserRouter } from 'react-router-dom';
import Room from '../pages/Room';
import Home from '../pages/Home';
import Layout from '../components/Common/Layout';
import QuestionList from '../components/Room/Question/QuestionList';
import QuestionPost from '../components/Room/Question/QuestionPost';
import Login from '../pages/Login';
import Register from '../pages/Register';


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
        path: 'login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: 'rooms/:roomId',
        element: <Room />,
        children: [
          { path: '', element: <QuestionList /> },
          { path: 'questions/:questionId', element: <QuestionPost /> },
        ],
      },
    ],
  },
  
]);

export default router;
