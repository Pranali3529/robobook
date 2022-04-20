import React, { memo } from 'react';

const Header = () => {
    console.log('Header');

    return (
        <h1 className='f1'>RoboFriends</h1>   
    )
}

export default memo(Header);
// import React, { Component } from "react";

// class Header extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//       return false;
//   } 

//    render() {
//     console.log("Header")
//     return <h1 className='f1'>RoboFriends</h1>
//   }
// }



// export default Header;