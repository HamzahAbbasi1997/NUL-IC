import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import DonateSection from '../components/DonateSection'
import { DonateObj} from '../components/DonateSection/Data'
import CurrentSection from '../components/CurrentSection'
import { CurrentObj} from '../components/CurrentSection/Data'
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection />
    <CurrentSection {...CurrentObj} />
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <Services/>
    <DonateSection {...DonateObj} />
    <Footer/>
    </>
  )
}

export default Home