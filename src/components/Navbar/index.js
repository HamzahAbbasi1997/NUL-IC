import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Newcastle Under Lyme Islamic Centre</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to="current"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>News</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="mission"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Our Mission</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Services</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn >
                    {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="6ERPTCJGT8CEW" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                    </form> */}

                    <NavBtnLink to="donate"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Donate</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;
