import React from "react";
import styled from "styled-components";

// Icons Import
import { BsNewspaper } from "react-icons/bs";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { MdQueuePlayNext } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { VscDebugConsole } from "react-icons/vsc";

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <div className="top-nav">
        <img
          className="logo"
          src="https://i.imgur.com/zwkhlja.png"
          alt="logo"
        />
      </div>

      <div className="nav-container top-border">
        <MdOutlineHome className="nav-icon" />
        <NavLink className=" nav-home" to="/">
          Home
        </NavLink>
      </div>

      <div className="nav-container">
        <BsNewspaper className="nav-icon" />
        <NavLink className=" nav-log" to="/logs">
          Logs
        </NavLink>
      </div>

      <div className="nav-container">
        <MdQueuePlayNext className="nav-icon" />
        <NavLink className=" nav-queue" to="/queue">
          Queue
        </NavLink>
      </div>

      <div className="nav-container">
        <TbSettings className="nav-icon" />
        <NavLink className=" nav-config" to="/configure">
          Configure Bot
        </NavLink>
      </div>

      <div className="nav-container">
        <VscDebugConsole className="nav-icon" />
        <NavLink className=" nav-debug" to="/debug">
          Console
        </NavLink>
      </div>

      <div className="nav-container">
        <IoIosHelpBuoy className="nav-icon" />
        <NavLink className=" nav-help" to="/help">
          Help
        </NavLink>
      </div>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled.div`
  display: block;
  position: absolute;
  width: 15%;
  height: 100%;
  background: rgb(13 13 15 / 100%);
  box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
  font-family: ${(pr) => pr.theme.fonts.primary};

  a {
    text-decoration: none;
    color: white;
  }

  .logo {
    width: 5em;
    margin-right: 1em;
  }

  .nav-container {
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    ${"" /* border: 1px solid black; */}
    color: red;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: start;
  }

  .nav-container:hover,
  a:hover {
    background-color: ${(pr) => pr.theme.colors.secondary};
    color: ${(pr) => pr.theme.colors.berry};
  }

  .nav-icon {
    margin-right: 1em;
    color: white;
    width: 1.5em;
    height: auto;
    color: white;
  }

  .top-border {
    border-top: 1px solid ${(pr) => pr.theme.colors.berry};
  }
`;
