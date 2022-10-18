import withUniversalSession, { UniversalProvider, useSession } from '@blue-express/bx-lib-universal-frontend'
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useApi } from './services/api';
import './styles/main.scss';

const App = () => {
  /* const { configAuthorization } = useApi()
  const { refreshSession, getSession, hasStarted } = useSession()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [session, setSession] = useState<any>(null)

  console.log('START?', hasStarted)
  useEffect(() => {
    if (session) {
      if (session.ssoToken) {
        configAuthorization(session)
      }
    }
  }, [session])

  useEffect(() => {
    if (hasStarted) {
      console.log('started')
      const currentSession = getSession()
      setSession(currentSession)
      console.log('try to refresh')
      console.log(session?.ssoToken)
      refreshSession()
    }
  }, [hasStarted]) */

  return (
    <HelmetProvider>
      {/* <UniversalProvider
        config={{
          env: 'dev',
          service: 'tms',
          storage: 'cookie',
          locale: 'es',
          }}
      > */}
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    {/* </UniversalProvider> */}
    </HelmetProvider >
  )
}

export default App

/* export default withUniversalSession(App, {
  env: 'dev',
  service: 'tms',
  storage: 'cookie',
  locale: 'es',
})
 */