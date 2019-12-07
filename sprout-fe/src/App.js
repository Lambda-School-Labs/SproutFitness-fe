import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import Dashboard from './components/dashb';
import CoachDetails from './components/coachprofile/CoachDetails';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header header-nav">
        <Navbar />
      </header>
      <Route  path='/login' component={LoginForm} />
      <Route  path='/register' component={SignupForm} />
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/profile' component={CoachDetails} />
    </div>
  );
}

export default App;