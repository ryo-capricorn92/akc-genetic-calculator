import React from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

import Calculator from './presentation/Calculator';
import Header from './presentation/Header';
import Home from './presentation/Home';

const HomeRedirect = () => (
  <Redirect to="home" />
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomeRedirect} />
          <Route path={process.env.PUBLIC_URL + '/home'} component={Home} />
          <Route path={process.env.PUBLIC_URL + '/calculator'} component={Calculator} />
        </div>
      </Router>
    );
  }
}

export default App;
