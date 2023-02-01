import React,{useContext} from 'react';
import { Container , Navbar ,Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { CounterContext } from '../context/counterContext';

export default function MyNav() {
   let {count}= useContext(CounterContext);

  return (
    <Navbar className="myNav bg-dark" expand="lg">
    <Container className="navbar-dark">
      <Navbar.Brand href="#form">UserData ({count})</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="home">Home</NavLink>
          <NavLink className="nav-link" to="login">Login</NavLink>
          <NavLink className="nav-link" to="users">Users</NavLink>
          <NavLink className="nav-link" to="details">Details</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}