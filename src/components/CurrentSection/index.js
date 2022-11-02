import React from 'react'
import {Button} from '../ButtonElements'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Subtitle2,
    BtnWrap,
    ImgWrap,
    Img
 } from './CurrentElements'

const CurrentSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2,
    btnclick
}) => {

  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle2 darkText={darkText} >بيسمِ الله الرحمن الرحيم السلام علیکم </Subtitle2>
                    <Subtitle darkText={darkText} >{description}</Subtitle>

                    
                                        
                    <Subtitle2 darkText={darkText}>لن تنالوا البِرً حتى تُنفقوا مما تُحِبون</Subtitle2>
                    <Subtitle darkText={darkText}>
                    We are aiming to raise £650,000 to meet the full costs and initial restoration to get it in working order. 
                    Please contribute to this great cause and send your Sadqa e Jaria to our registered charity account:
                    </Subtitle>
                    <BtnWrap>
                        <Button 
                        to={btnclick}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        
                        >{buttonLabel}</Button>
                    </BtnWrap>
                    <Subtitle darkText={darkText}><br></br>
                    JazakAllah Khair, <br></br>
                    Newcastle Under Lyme Islamic Centre
                    </Subtitle>
                
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                        <Img src={require('../../images/church4.jpeg')} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default CurrentSection