import React from 'react'
import pdf from '../../files/Charity Gift Aid Declaration.pdf';
import {ButtonLink} from '../ButtonLink'
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
    BtnWrap,
    ImgWrap,
    Img
 } from './DonateElements'

const DonateSection = ({
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
                    <Subtitle darkText={darkText} >{description}</Subtitle>
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download="Gift Aid Declaration Form.pdf">
                    <ButtonLink>
                        <i className="fas fa-download"/>
                        Gift Aid Declaration Form
                    </ButtonLink>
                    </a>
                    
                    <Subtitle darkText={darkText}> <br></br>For Bank Transfers, please use the following information: <br></br> Natwest Bank<br></br> 
                    Account Name: Newcastle Under Lyme Islamic Centre <br></br> Sort Code: 010138 <br></br> Account Number: 25405829 <br></br> <br></br>
                    Alternativly use the Donate button below for Debit/Credit or Paypal payments:</Subtitle>


                    <BtnWrap>

                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="6ERPTCJGT8CEW" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                        </form>

                        

                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default DonateSection