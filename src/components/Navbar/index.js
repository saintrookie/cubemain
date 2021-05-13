import React, {useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import {Nav, NavLogo, NavbarContainer, NavMenu, NavItem, MobileIcon, NavLinks, NavBtn, NavBtnLink} from './navbarElements'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
      if(window.scrollY >= 80){
        setScrollNav(true)
      }else{
        setScrollNav(false)
      }
    }

    useEffect(() => {
      window.addEventListener("scroll", changeNav);
    }, []);

    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
              <NavLogo to="/">CUBE MIND</NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                  >
                    About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="design"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Design
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Services
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="join"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Join
                  </NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink
                  to="signin"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign In
                </NavBtnLink>
              </NavBtn>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar
