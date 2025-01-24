import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      黄老哥牛逼
      <p>{count}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>+</button>
      <button onClick={() => setCount((pre) => pre - 1)}>-</button>
    </div>
  );
};

export default App;
