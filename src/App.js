import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = (props) => {
  return (
   <div>Oi mundo</div>
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