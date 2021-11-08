import React from 'react';
// import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

// const Button = ({ mailto, children }) => {
//     return (
//       <Link
//         to="#"
//         onClick={(e) => {
//           window.location = mailto;
//           e.preventDefault();
//         }}
//       >
//         {children}
//       </Link>
//     );
// };

// export default Button;

const Button = ({ mailto,children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
