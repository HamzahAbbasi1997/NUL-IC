import React from 'react';
import pdf from '../../files/Charity Gift Aid Declaration.pdf';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import { 
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesCardFile,
    ServicesIcon,
    ServicesH2,
    ServicesP
 } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard to="/prayer">
                <ServicesIcon src={Icon1} />
                <ServicesH2>Prayer Timetable</ServicesH2>
                <ServicesP>Under Development!</ServicesP>
            </ServicesCard>
            <ServicesCardFile href={pdf} target="_blank" download="Charity Gift Aid Declaration.pdf">
                
                <ServicesIcon src={Icon2} />
                <ServicesH2>Gift Aid Declaration</ServicesH2>
                <a href={pdf} target="_blank" download="Charity Gift Aid Declaration.pdf">
                    Please open in new tab.
                </a>
            </ServicesCardFile>
            <ServicesCard to="donate"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Donate Now</ServicesH2>
                <ServicesP>Accepting donations.</ServicesP>
            </ServicesCard>
            <ServicesCard to='/gallery'>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Gallery</ServicesH2>
                <ServicesP>Under Development!</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services