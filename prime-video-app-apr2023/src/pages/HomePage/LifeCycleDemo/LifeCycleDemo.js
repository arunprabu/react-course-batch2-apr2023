// rce
import React, { Component } from 'react'

class LifeCycleDemo extends Component {
  constructor() {
    // constructor is optional
    console.log("======1. Inside constructor ========");
    super();
    // component-wide initial data
    this.state = {
      isLoading: true,
      isError: false,
      featureName: ''
    };
  }

  // lifecycle hook
  componentDidMount() {
    console.log("======3. Inside componentDidMount");
    // will be called ONLY ONCE after initial rendering
    // when the comp's UI comes into view --  componentDidMount will be called
    // ideal place for you to send REST API Calls
    // mocking REST API call with timeout 
    setTimeout( () => {
      // upon getting successful response
      this.setState({
        isLoading: false,
        isError: false,
        featureName: "Understanding LifeCycle Hooks in Detail",
      });

      // upon getting error response
      // this.setState({
      //   isLoading: false,
      //   isError: true,
      //   featureName: ''
      // });
    }, 5000); // assuming after 5 sec we get resp
  }

  shouldComponentUpdate( nextProps, nextState) {
    // must return either true or false
    // when the setState is called -- this will be executed
    console.log("=======4. Inside shouldComponentUpdate ======= ");
    // you have to compare the prevState (this.state) and new State (nextState)
    // you can also compare prevProps (this.props) and nextProps 
    console.log(this.state);
    console.log(nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("=======6. Inside componentDidUpdate =======");
    // called immediately after the UPDATE in JSX (after re-rendering)
    // will NEVER be called after initial Rendering
    // this is ideal for tiny dom manipulations
    document.getElementById("myPara").style.color = 'green';
  }

  render() {
    console.log("======2 & 5. Inside Render ========");
    // this render method will be executed immediately after constructor -- Initial Rendering
    // this render method will be called after state updated
    if (this.state.isLoading) {
      return <div className="spinner-border text-success" role="status"></div>;
    }

    if(this.state.isError){
      return(
        <div className='alert alert-danger'>Sorry...Some Error Occurred! Try again later!!</div>
      )
    }

    return (
      <div>
        <h3>LifeCycleDemo</h3>
        <p id="myPara">Feature we are learning: {this.state.featureName}</p>
      </div>
    );
  }
}

export default LifeCycleDemo