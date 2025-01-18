import Hero from "./componants/Hero/Hero"
import Navbar from "./componants/Navbar/Navbar"
import "./App.css"
import Skills from "./componants/Skills/Skills"
import WorkExperience from "./componants/WorkExperience/WorkExperience"
import ContactMe from "./componants/ContactMe/ContactMe"




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
    </>
  )
}

export default App
