import React from 'react';
import prayer from '../../files/prayer.pdf';
import donate from '../../files/Ways to donate.pdf';
import Icon1 from '../../images/prayer.png';
import Icon2 from '../../images/charity.png';
import Icon3 from '../../images/donate.jpg';
import { 
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesCard2,
    ServicesIcon,
    ServicesH2,
    ServicesP
 } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard href={prayer} target="_blank" rel="noopener noreferrer">
                <ServicesIcon src={Icon1} />
                <ServicesH2>Prayer Timetable</ServicesH2>
                <ServicesP>Click to download prayer timetable.</ServicesP>
            </ServicesCard>
            <ServicesCard href={donate} target="_blank" rel="noopener noreferrer">
                
                <ServicesIcon src={Icon2} />
                <ServicesH2>Ways to Donate</ServicesH2>
                <ServicesP>Click for more info.</ServicesP>
                </ServicesCard>
            <ServicesCard2 to="donate"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Donate Now</ServicesH2>
                <ServicesP>Accepting donations.</ServicesP>
            </ServicesCard2>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services