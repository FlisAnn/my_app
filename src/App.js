import React from 'react';
import Hello from './Hello';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

const App = () => {
  return (
<>
<Header />
<Switch>
  <Route exact path="/" component={Hello}></Route>
  <Route exact path="/about" component={About}></Route>
  <Route exact path="/projects" component={Projects}></Route>
  <Route exact path="/resume" component={Resume}></Route>
  <Hello />
</Switch>
<Footer />
</>
  );
};

export default App;
