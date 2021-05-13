import React from 'react'
import {ServicesContainer, ServicesHeading, ServicesIcon, ServicesTitle, ServicesCard, ServicesWrapper, ServicesText} from './servicesElements'

import Icon1 from '../../images/programming.svg';
import Icon2 from "../../images/socmed.svg";
import Icon3 from "../../images/map.svg";



const Services = () => {
    return (
      <ServicesContainer id="services">
        <ServicesHeading>Our Services</ServicesHeading>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesTitle>Programming</ServicesTitle>
            <ServicesText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ServicesText>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesTitle>Social Media</ServicesTitle>
            <ServicesText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ServicesText>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesTitle>System Design</ServicesTitle>
            <ServicesText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ServicesText>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    );
}

export default Services
