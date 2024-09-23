// Steps for Conversion:

// Define Props Interface: Create an interface to define the type of props the component expects.
// Annotate Function Component: Use the FC (FunctionComponent) type from React to annotate the component.
// Import React with Types: Ensure proper import of React to support TypeScript

import React, { FC } from 'react';

// Define the type for the props
interface GreetingProps {
  name: string;
}

// Annotate the component with FC and the props type
const Greeting: FC<GreetingProps> = ({ name }) => {
  return (
    <div>
    'Hello, {name}!  '
    </div>);
};

export default Greeting;
