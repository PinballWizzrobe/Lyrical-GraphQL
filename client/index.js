import "./style/style.css";

import { IndexRoute, Route, Router, hashHistory } from "react-router";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import SongCreate from "./components/SongCreate";
import SongList from "./components/SongList";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
