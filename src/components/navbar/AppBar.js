import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import MainContent from "../../pages/MainContent";
import MainContent2 from "../../pages/MainContent2";
import RegUser from "../../views/RegUser";
import FetchData from "../data/FetchData";
import FetchData2 from "../data/FetchData2";
import ReactContext from "../belajarContext/Home";
import ListMahasiswa from "../mahasiswa/Home";
import Axios from "../axios/list";
import CRUDHOOKS from "../CRUD1/Home";
import Login from "../login/index";
 
class AppBar extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
                <NavLink to="/">Login</NavLink>
            </li>
            <li>
                <NavLink to="/home">Home</NavLink>
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
                <NavLink to="/fetchdata2">Fetch Data API 2</NavLink>
            </li>
            <li>
                <NavLink to="/context">React Context</NavLink>
            </li>
            <li>
                <NavLink to="/listMahasiswa">ListMahasiswa</NavLink>
            </li>
            <li>
                <NavLink to="/listAxios">Axios</NavLink>
            </li>
            <li>
                <NavLink to="/crudHooks">CRUDHOOKS</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/home">
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
            <Route path="/context">
                <ReactContext/>
            </Route>
            <Route path="/listMahasiswa">
                <ListMahasiswa/>
            </Route>
            <Route path="/listAxios">
                <Axios/>
            </Route>
            <Route path="/crudHooks">
                <CRUDHOOKS/>
            </Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default AppBar;