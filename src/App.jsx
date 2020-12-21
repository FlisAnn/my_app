import React from 'react';
import Hello from './components/Hello';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import DisplayResume from './components/DisplayResumeResume';
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
  <Route exact path="/resume" component={DisplayResume}></Route>
  <Hello />
</Switch>
<Footer />
</>
  );
};

export default App;
