import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
    );
  }
}

export default NavBar;
