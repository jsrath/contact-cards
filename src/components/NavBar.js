import React, { Component } from 'react';
import { Navbar, NavItem, NavbarNav, NavbarToggler, Collapse, Fa } from 'mdbreact';
import logo from '../assets/images/logo.svg';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <Navbar className="sticky-top navbar-top" dark expand="md">
        <div className="container">
          <NavItem className="d-flex justify-content-center">
            <img className="ml-4 p-0" src={logo} alt="logo" />
            <h3 className="logo-text mt-3 pl-2 pt-1">
              Contact <span className="text-white">Cards</span>
            </h3>
          </NavItem>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right>
              <NavItem>
                <Fa className="px-1 my-4 mr-4 nav-icon" icon="plus-circle" size="2x" onClick={this.props.toggleModal} />
              </NavItem>
              <NavItem>
                <form
                  className="form-inline md-form px-1 my-3 mr-5"
                  onSubmit={event => {
                    event.preventDefault();
                  }}
                >
                  <input
                    className="form-control mr-sm-2 mb-0 text-white"
                    type="text"
                    placeholder="Search for Contacts"
                    aria-label="Search"
                    value={this.props.search}
                    onChange={this.props.handleSearch}
                  />
                  {this.props.search !== '' ? <Fa icon="remove" id="delete-icon" onClick={this.props.clearSearch} aria-hidden="true" /> : null}
                </form>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default NavBar;
