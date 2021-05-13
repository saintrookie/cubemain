import React, {useState} from 'react'
import HeroSection from '../HeroSection';
import Navbar from '../Navbar'
import SideBar from '../SideBar'

import InfoSection from '../InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/data';
import Services from '../Services';
import Footer from '../Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
      <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Services />
        <InfoSection {...homeObjFour} />
        <Footer />
      </>
    );
}

export default Home
