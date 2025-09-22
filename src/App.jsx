import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { useState} from "react"
import TrustedBy from "./components/TrustedBy"
import Services from "./components/Services"
import OurWork from "./components/OurWork"
import { AnimatePresence } from "framer-motion"
import InProduction from "./components/InProduction"


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  const [showInProduction, setShowInProduction] = useState(true);

  return(
      <div className="dark:bg-black relative min-h-screen">
        <AnimatePresence>
          {showInProduction && <InProduction onClose={() => setShowInProduction(false)} />}
        </AnimatePresence>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero/>
        <TrustedBy/>
        <Services/>
        <OurWork/>
      </div>
  )
}

export default App 