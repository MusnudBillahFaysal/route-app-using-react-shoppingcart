// PrivateRoute.js
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';
import LoginForm from './loginform';

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/loginform" />;
}
