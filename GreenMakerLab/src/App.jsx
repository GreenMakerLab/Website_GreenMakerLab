import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Team from './pages/Team';
import AboutUs from './pages/AboutUs';
import TablePeriodic from './pages/TablePeriodic';
import UsePageTitle from './components/TitlePage';
import Humanitarian from './components/elements/Humanitarian';
import GreenChemistry from './components/elements/GreenChemistry';
import PreventWaste from './components/elements/PreventWaste';
import AtomEconomy from './components/elements/AtomEconomy'
import LessHazardous from './components/elements/LessHazardous';
import MolecularDesign from './components/elements/MolecularDesign';
import Solvents from './components/elements/Solvents';
import Energy from './components/elements/Energy';
import Renewable from './components/elements/Renewable';
import Catalysis from './components/elements/Catalysis';
import Degradation from './components/elements/Degradation';
import Measurement from './components/elements/Measurement';
import Frameworks from './components/elements/Frameworks';
import EconomyMarket from './components/elements/EconomyMarket';
import Metrics from './components/elements/Metrics';
import Policies from './components/elements/Policies';
import Tools from './components/elements/Tools';
import EnablingSystem from './components/elements/EnablingSystem';
import NobleElements from './components/elements/NobleElements';
function App() {
    
  return ( 
    <section className='font-sans m-0 p-0'>
    <Router>
      <UsePageTitle/>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="publications" element={<Publications/>} />
          <Route path="tableperiodic" element={<TablePeriodic/>} />
          <Route path="team" element={<Team/>} />
          <Route path="about-us" element={<AboutUs/>} /> 
          <Route path="Humanitarian" element={<Humanitarian/>}/>
          <Route path="GreenChemistry" element={<GreenChemistry/>} />
          <Route path="PreventWaste" element={<PreventWaste/>} />
          <Route path="AtomEconomy" element={<AtomEconomy/>} />
          <Route path="LessHazardous" element={<LessHazardous/>} />
          <Route path="MolecularDesign" element={<MolecularDesign/>} />
          <Route path="Solvents" element={<Solvents/>}/>
          <Route path="Energy" element={<Energy/>}/>
          <Route path="Renewable" element={<Renewable/>} />
          <Route path="Catalysis" element={<Catalysis/>} />
          <Route path="Degradation" element={<Degradation/>} />
          <Route path="Measurement" element={<Measurement/>} />
          <Route path="Frameworks" element={<Frameworks/>} />
          <Route path="EconomyMarket" element={<EconomyMarket/>} />
          <Route path="Metrics" element={<Metrics/>} />
          <Route path="Policies" element={<Policies/>} />
          <Route path="Tools" element={<Tools/>} />
          <Route path="EnablingSystem" element={<EnablingSystem/>} />
          <Route path="NobleElements" element={<NobleElements/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </section>
  )
}

export default App;
