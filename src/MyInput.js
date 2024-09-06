import React, { forwardRef } from 'react';

// Define a component that uses the forwarded ref
const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default MyInput;
