// import React, { useState, useEffect } from "react";

// const IncrementingNumber = () => {
//   const [number, setNumber] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setNumber((prevNumber) => prevNumber + 1);
//     }, 2000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures the effect runs once on mount

//   return (
//     <div>
//       <h1>Incrementing Number:</h1>
//       <p>{number}</p>
//     </div>
//   );
// };

// export default IncrementingNumber;
import React, { useEffect } from "react";

const IncrementingNumber = React.memo((props) => {
  console.log("Component rendered!", props);

  useEffect(() => {
    console.log("Hello from useEffect!");

    // Cleanup function (optional)
    return () => {
      console.log("Cleanup function executed!");
    };
  }, []); // Pass null as the second argument if you want the effect to run only once

  return (
    <div>
      <p>Check the console for messages!</p>
    </div>
  );
});

export default IncrementingNumber;
