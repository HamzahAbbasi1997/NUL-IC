import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

const PrayerPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <Services/>
    <div><iframe src="https://timesprayer.com/widgets.php?frame=3&amp;lang=en&amp;name=stoke-on-trent&amp;time=0" 
    style={{border: 'none', overflow: 'hidden', width: '100%', height: '220px'}}></iframe>
    </div>
    <Footer/>
    </>
  )
}

export default PrayerPage