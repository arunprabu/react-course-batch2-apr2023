// error boundary must be a class component
import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  // let's catch the error
  // when there is a runtim error -- this method would be called automatically
  // if receives the error that was thrown as param
  // must return a value to update the state
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return {
      hasError: true,
    };
  }

  // will be called only when a run time error occurs
  componentDidCatch(error, errorInfo) {
    console.log("====== Inside componentDidCatch =====");
    console.log(error); // error in original source code
    console.log(errorInfo); // error in compiled bundle.js

    // you can log the error in third party logging service ex: LogRocket
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger">
          <p>Some Error Occurred! Try again later</p>
          <p>If the error persists, contact the Admin!</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary