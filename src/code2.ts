// Steps for Conversion:

// Define State Interface: Create an interface to define the type of the component's state.
// Annotate Component Class: Use TypeScript's generics to annotate the Component class with the state type.
// Ensure Proper Imports: Ensure correct imports to support TypeScript in React.


import React, { Component } from 'react';

// Define the type for the state
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> { 
  state: CounterState = {
    count: 0
  };

  // Annotate the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  }; 

  render() { 
    return (
      <div> 
       ( <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> )
      </div>
    );
  }
} 

export default Counter;
