import { useState } from 'react';


function App() {
  function makeArray() {
    return [1, 10, 32, 40];
  }

  // const [firstElement, secondElement] =makeArray();
  // console.log(firstElement, secondElement);

  const [count, setCount] = useState(0);

  console.log( useState(50));

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <button 
            onClick={handleClick}>Add Animal</button>
            <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
