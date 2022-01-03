import React from 'react';
import countapi from 'countapi-js';

const Counter = () => {
  // countapi.visits('global').then((result) => {
  //   console.log(result.value);
  // });
  // countapi.set('vilegal', 'article1', 2000).then((result) => {
  //   console.log(result.value);
  // });
  // const counter = countapi.set('mysite.com', 'test', 1000).then((result) => { result.value });

  // countapi.create('vilegal', 'blog', 10000, 1, -1, 1).then((result) => {
  //   console.log(result.value);
  // });
  // countapi.set('vilegal', 'blog', 1000).then((result) => {
  //   console.log(result.value);
  // });
  countapi.get('global', 'test').then((result) => {
    console.log(result.value) });
  // countapi.visits('vilegal', 'blog').then((result) => {
  //   console.log(result.value);
  // });
  return Counter;
};

export default Counter;

// export const Counter = () => {
//   const counter = countapi.visits().then((result) => {
//     console.log(result.value);
//   return (
//     <div>
//       result.value
//     </div>
//   );
//   }
