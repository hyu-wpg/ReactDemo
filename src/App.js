import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button was clicked!');
  };
  
  const value = 'React World';
  return <div>
    <h1>Hello {value}</h1>
    <button onClick={handleClick}>Click Me!</button>
    </div>;
}

export default App;
