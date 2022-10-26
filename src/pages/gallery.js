import React, {useState} from 'react'
import Footer from '../components/Footer'
import Gallery from '../components/GallerySection/index.js'
import NavbarUniversal from '../components/NavbarUniversal'
import Sidebar from '../components/Sidebar'

const GalleryPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavbarUniversal toggle={toggle} />
    <Gallery/>
    <Footer/>
    </>
  )
}

export default GalleryPage