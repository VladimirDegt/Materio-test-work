import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const LayoutPhonebook = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Outlet />
    </div>
  );
};
