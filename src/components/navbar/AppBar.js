// import React from 'react';
// import MainConten from './MainConten';

// const AppBar = (props) => {
//     return (
//         <div>
//             <ul className="header">
//                 <li>
//                      Home
//                 </li>
//                 <li>
//                     Halaman 1
//                 </li>
//                 <li>
//                     Halaman 2
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default AppBar

import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import MainContent from "../../pages/MainContent";
import MainContent2 from "../../pages/MainContent2";
import RegUser from "../../views/RegUser";
import FetchData from "../data/FetchData";
import FetchData2 from "../data/Search";
 
class AppBar extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/daftarUser">Daftar User</NavLink>
            </li>
            <li>
                <NavLink to="/reguser">Registrasi User</NavLink>
            </li>
            
            <li>
                <NavLink to="/fetchdata">Fetch Data API</NavLink>
            </li>
            <li>
                <NavLink to="/fetchdata2">Fetch Data API2</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/">
                <MainContent/>
            </Route>
            <Route path="/daftarUser">
                <MainContent2/>
            </Route>
            <Route path="/reguser">
                <RegUser/>
            </Route>
            <Route path="/fetchdata">
                <FetchData/>
            </Route>
            <Route path="/fetchdata2">
                <FetchData2/>
            </Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default AppBar;