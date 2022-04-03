import React from 'react';
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"



const Header = (prop) => {
   const { text, bgColor, textColor } = prop;

   const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
      }




    return (
        <header className={headerStyles}>
            <div className='container'>
            <div style={{ textDecoration: "none", color: "#ff6a95" }}>
                <h2>{text}</h2>
            </div>
            </div>
        </header>
    );
};




// function Header({ text, bgColor, textColor }) {
    // const headerStyles = {
    //   backgroundColor: bgColor,
    //   color: textColor,
    // }
  
//     return (
//       <div style={headerStyles}>
//         <div className='container'>
//           <Link to='/' style={{ textDecoration: "none", color: "#ff6a95" }}>
//             <h2>feedback ui</h2>
//           </Link>
//         </div>
//       </div>
//     )
//   }

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
  }
  
  Header.prototypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
  }
  

export default Header; 