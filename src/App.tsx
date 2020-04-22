import React, { Fragment } from "react";
// import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Route } from "react-router";
import Routes from "static/routes/routes";
import Layout from "views/layout/Layout";
import "./custom.css";

export const App = (props: any) => {
  return (
    <Layout {...props}>
      {/* <Route path='/counter' component={Counter} />*/}
      {Routes.map((route: any, index: any) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Layout>
  );
};

export default App;
