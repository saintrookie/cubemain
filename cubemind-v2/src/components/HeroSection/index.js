import React, {useState} from 'react'
import {Button} from '../buttonElements'
import Video from '../../video/intro.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroTitle, HeroTagline, HeroBtnWrapper, ArrowForward, ArrowRight} from "./heroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroTitle>Digitalize Your Future World</HeroTitle>
          <HeroTagline>The perfect place for consultation about your digital ambition. </HeroTagline>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                Get Started { hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>

          </HeroBtnWrapper>
       
        </HeroContent>
      </HeroContainer>
    );
}

export default HeroSection
