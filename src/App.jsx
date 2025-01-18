import Hero from "./componants/Hero/Hero"
import Navbar from "./componants/Navbar/Navbar"
import "./App.css"
import Skills from "./componants/Skills/Skills"
import WorkExperience from "./componants/WorkExperience/WorkExperience"
import ContactMe from "./componants/ContactMe/ContactMe"
import Footer from "./componants/Footer/Footer"




function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
      </div>
      <Skills/>
      <WorkExperience/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App
