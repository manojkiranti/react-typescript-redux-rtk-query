import { Landing } from '@/features/landing';
import { useRoutes, Navigate } from 'react-router-dom';
import { publicRoutes } from './public';
import { protectedRoutes } from './protected';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <Landing /> }, { path: '*', element: <Navigate to="." /> }];
  const routes = publicRoutes
  const element = useRoutes([...protectedRoutes, ...commonRoutes]);
  return (
    <>{element}</>
  )
}