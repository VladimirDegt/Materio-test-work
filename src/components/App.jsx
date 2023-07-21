import { lazy, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { lightTheme, darkTheme } from '../utils/themes';
import { StyledContainer } from './App.styled';
import { Layout } from './Layout/Layout';
import { LayoutPhonebook } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

const Profile = lazy(() => import('../pages/Profile'));
const Account = lazy(() => import('../pages/Account'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const HomePage = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };
  const theme = darkMode ? darkTheme : lightTheme;

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
            <Route index element={<Profile />} />
            <Route path="/account" element={<Account />}>
              <Route path="/account" element={<LayoutPhonebook />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <HomePage />
                    </Suspense>
                  }
                />
                <Route
                  path="register"
                  element={
                    <RestrictedRoute
                      redirectTo="/account/contacts"
                      component={
                        <Suspense fallback={<div>Loading...</div>}>
                          <RegisterPage />
                        </Suspense>
                      }
                    />
                  }
                />
                <Route
                  path="login"
                  element={
                    <RestrictedRoute
                      redirectTo="/account/contacts"
                      component={
                        <Suspense fallback={<div>Loading...</div>}>
                          <LoginPage />
                        </Suspense>
                      }
                    />
                  }
                />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute
                      redirectTo="/account/login"
                      component={
                        <Suspense fallback={<div>Loading...</div>}>
                          <ContactsPage />
                        </Suspense>
                      }
                    />
                  }
                />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </StyledContainer>
    </ThemeProvider>
  );
};
