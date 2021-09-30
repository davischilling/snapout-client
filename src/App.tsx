import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from './components';
import {
  AppProvider,
  MenuProvider
} from './contexts';
import { RoutingHook } from './hooks';
import routes from './routes/routes';
import Layout from './themes/Layout';
import './styles/styles.css';
import './styles/slider.css';
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(true)

  useEffect(() => {
    onRouteChange();
  }, [location.pathname, onRouteChange]);

  async function onRouteChange() {
    if (location.pathname === '/' && !menuActive) {
      setMenuActive(true)
    } else if (location.pathname !== '/')  {
      setMenuActive(false)
    };
  }

  return (
    <ErrorBoundary>
        <AppProvider>
          <MenuProvider>
            <Layout menuActive={menuActive} >
              <RoutingHook routes={routes.notLogged} />
            </Layout>
          </MenuProvider>
        </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
