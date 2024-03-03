import React from 'react'
import Header from './Components/Header'
import Feature from './Components/Feature'
import About from './Components/About'
import aboutImage from "./images/Frame 19.png"
import aboutImage1 from "./images/download.png"
import Presentation from './Components/Presentation'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div className='App'>
<Header/>
<Feature/>
<About image={aboutImage} title="Come With All You Need For Daily Life" button="Get The App"/>
<Presentation/>
<About image={aboutImage1} title="Download And Get The App Now" button="Download"/>
<Contact/>
      
    </div>
  )
}

export default App