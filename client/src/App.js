import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  console.log(data)

  return (
    <div>
      {data?.users}
    </div>
  );
}

export default App;
