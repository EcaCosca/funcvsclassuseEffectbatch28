import React from 'react'

class ClassComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        student:'Bashar'
      };
    }
    render() {
      console.log(this.state)
      return (
        <div>
          <p>Student: {this.state.student}</p>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            -1
          </button>
          <button onClick={() => this.setState({ count: 0 })}>
            Reset
          </button>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            +1
          </button>
        </div>
      );
    }
  }
  
export default ClassComponent