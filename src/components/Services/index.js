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
            <ServicesCard href={pdf} download target="_blank" id="download">
                <ServicesIcon src={Icon2} />
                <ServicesH2>Gift Aid Declaration</ServicesH2>
                <ServicesP>Click to Download.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Islamic Knowledge</ServicesH2>
                <ServicesP>Coming Soon!</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services