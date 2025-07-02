import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Work, StarsCanvas } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="realtive z-0 bg-primary">
        <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Work /> */}  {/* Have to work on this*/}
        {/* <Feedbacks /> */} {/*Should reach out to people */}
        <div className={`relative z-0`}>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App
