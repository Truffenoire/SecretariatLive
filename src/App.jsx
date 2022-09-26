// IMPORT
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
// PAGES
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import RGPD from './pages/RGPD/RGPD'
import Entreprises from './pages/Services/Entreprises'
import Particuliers from './pages/Services/Particuliers'
import FAQ from "./pages/FAQ/FAQ"
import Tarifs from "./pages/Tarifs/Tarifs"
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import BannerTop from "./components/BannerTop/BannerTop"


function App() {

  // accueil={accueil} setAccueil={setAccueil} service={service} setService={setService} tarifs={tarifs} setTarifs={setTarifs}
  //     contact={contact} setContact={setContact} faq={faq} setFaq={setFaq} sousMenu={sousMenu} setSousMenu={setSousMenu}
    const [accueil, setAccueil] = useState('selected')
    const [service, setService] = useState('hoverA')
    const [tarifs, setTarifs] = useState('hoverA')
    const [contact, setContact] = useState('hoverA')
    const [faq, setFaq] = useState('hoverA')
    const [sousMenu, setSousMenu] = useState(0)
    const [growUp, setGrowUp] = useState('grow')
    const [growUpTwo, setGrowUpTwo] = useState('essai')
    const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="App">
      <BannerTop growUp={growUp} setGrowUp={setGrowUp} growUptwo={growUpTwo} setGrowUpTwo={setGrowUpTwo} />
      <Header showMenu={showMenu} setShowMenu={setShowMenu} accueil={accueil} setAccueil={setAccueil} service={service} setService={setService} tarifs={tarifs} setTarifs={setTarifs}
        contact={contact} setContact={setContact} faq={faq} setFaq={setFaq} sousMenu={sousMenu} setSousMenu={setSousMenu} />
      <Routes>
        <Route path="#/SecretariatLive" exact element={<Home />} />
        <Route path="#/entreprises" exact element={<Entreprises />} />
        <Route path="#/particuliers" exact element={<Particuliers />} />
        <Route path="#/tarifs" exact element={<Tarifs />} />
        <Route path="#/contact" exact element={<Contact />} />
        <Route path="#/rgpd" exact element={<RGPD />} />
        <Route path="#/FAQ" exact element={<FAQ setAccueil={setAccueil} setService={setService} setTarifs={setTarifs} setContact={setContact} setFaq={setFaq}/>} />
      </Routes>
      <Footer setAccueil={setAccueil} setService={setService} setTarifs={setTarifs} setContact={setContact} setFaq={setFaq}/>

    </div>
  );
}

export default App;
