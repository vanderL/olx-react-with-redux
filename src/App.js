import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Template } from './components/MainComponents';
import Header  from './components/partials/Header';
import Footer  from './components/partials/Footer';

import {Routes} from './Routes';

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);