import React from "react";

// const Clients = React.lazy(() => import("views/clients/Clients"));
// const Home = React.lazy(() => import("views/clients/Home"));
// const Counter = React.lazy(() => import("views/clients/Counter"));
// const FetchData = React.lazy(() => import("views/clients/FetchData"));

import Clients from "views/clients/Clients";
import Home from "views/clients/Home";
import Counter from "views/clients/Counter";
import FetchData from "views/clients/FetchData";

const Routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/clients", name: "Clients", component: Clients },
  { path: "/counter", name: "Counter", component: Counter },
  { path: "/fetchData", name: "FetchData", component: FetchData },
];

export default Routes;
