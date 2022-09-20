import React from 'react';
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
 } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
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
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer