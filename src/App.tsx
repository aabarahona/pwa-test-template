import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import './styles/main.scss';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
