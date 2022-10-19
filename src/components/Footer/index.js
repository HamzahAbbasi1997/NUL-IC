import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
 } from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
        <FooterWrap>
            {/* <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/donate">How it works</FooterLink>
                        <FooterLink to="/donate">Testimonials</FooterLink>
                        <FooterLink to="/donate">Careers</FooterLink>
                        <FooterLink to="/donate">Privacy Policy</FooterLink>
                        <FooterLink to="/donate">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/donate">How it works</FooterLink>
                        <FooterLink to="/donate">Testimonials</FooterLink>
                        <FooterLink to="/donate">Careers</FooterLink>
                        <FooterLink to="/donate">Privacy Policy</FooterLink>
                        <FooterLink to="/donate">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/donate">How it works</FooterLink>
                        <FooterLink to="/donate">Testimonials</FooterLink>
                        <FooterLink to="/donate">Careers</FooterLink>
                        <FooterLink to="/donate">Privacy Policy</FooterLink>
                        <FooterLink to="/donate">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/donate">How it works</FooterLink>
                        <FooterLink to="/donate">Testimonials</FooterLink>
                        <FooterLink to="/donate">Careers</FooterLink>
                        <FooterLink to="/donate">Privacy Policy</FooterLink>
                        <FooterLink to="/donate">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer> */}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        NUL Islamic Centre
                    </SocialLogo>
                    <WebsiteRights>NUL Islamic Centre © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//en-gb.facebook.com/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/?hl=en" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="//uk.linkedin.com/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer