import React from "react";
import { useState } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  // tO get the curr location i.e, url
  // Here its used only for highlighting Home, about
  let location = useLocation();
  let navigate=useNavigate();

  const [searchWord, setSearchWord] = useState('NULL');
  const [type, setType] = useState('NULL');

  const searchFn = (e) =>{
    e.preventDefault();
    // console.log(e);

    navigate("/", {state: {type: type, query: searchWord}});
    // navigate(-1);
  }

  const changeSearch = (e) =>{
    setSearchWord(e);
    setType('Search');
    // console.log(searchWord);
    // console.log(type);
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid"  >
          <Link className="navbar-brand" to="/">
            Movie Recommender  
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active": ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active": ""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search"  onSubmit={searchFn}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {changeSearch(e.target.value)}}
              />
              <button className="btn btn-outline-success" type="submit" >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
