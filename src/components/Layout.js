import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';

export const Layout = () => {
  return (
    <div style={{ width: 1240, margin: '0 auto', padding: '0 16px' }}>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
