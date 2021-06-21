// import React, { useEffect, useState } from "react";

// export default function Weather() {
//   const [temp, setTemp] = useState(null);
//   const [coords, setCoords] = useState();

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(({ coords }) => setCoords(coords));
//   });

//   useEffect(() => {
//     if (coords) return;

//     fetch(
//       `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${coords.latitude}&lon=${coords.longitute}`
//     )
//       .then((res) => res.json())
//       .then((data) => setTemp(data?.data[0]?.temp));
//   }, [coords]);

//   return (
//     <div>
//       <h2>Weather..</h2>
//       <p>{temp === null ? "n/a" : temp}&deg;</p>
//     </div>
//   );
// }
