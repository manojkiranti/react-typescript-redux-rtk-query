import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from "@/utils";
import { Loader } from '@/components/Elements';
import { MainLayout } from '@/components/Layout';

const { Dashboard } = lazyImport(() => import('@/features/dashboard'), 'Dashboard');
const { Profile } = lazyImport(() => import('@/features/users'), 'Profile');
const { Users } = lazyImport(() => import('@/features/users'), 'Users');
const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={<Loader />}
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> },
      { path: "profile", element: <Profile /> },
      { path: "users", element: <Users /> }
    ],
  },
];