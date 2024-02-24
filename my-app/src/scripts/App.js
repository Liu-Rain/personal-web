import React from 'react'
import '../styles/App.css';
import Topbar from './Topbar'
import AboutMe from './AboutMe'
import Education from './Education';
import Experience from './Experience';

function App() {

  const [scrollingY, setScrollingY] = React.useState(window.scrollY)
  const [showAboutMe, setShowAboutMe] = React.useState(true)
  const [showEducation, setShowEducation] = React.useState(false)

  React.useEffect(()=>{
    window.addEventListener('scroll', () => { 
      setScrollingY(window.scrollY)
    })
    if (scrollingY < 700) {
      setShowAboutMe(true)
      setShowEducation(false)
    } else if (scrollingY >= 700) {
      setShowAboutMe(false)
      setShowEducation(true)
    }

  },[scrollingY])

  console.log(scrollingY);




  return (
    <div className="App">
      <Topbar scrollingY={scrollingY} />
      {showAboutMe && <AboutMe scrollingY={scrollingY} />}
      {showEducation && <Education scrollingY={scrollingY} />}
      <Experience scrollingY={scrollingY} />
    </div>
  );
}

export default App;
