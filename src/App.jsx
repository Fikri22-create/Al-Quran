import './App.css'
import DaftarSuratComp from './components/DaftarSuratComp'
import FeatureSection from './components/FeatureSection'
import FooterComp from './components/FooterComp'
import NavbarComp from './components/NavbarComp'
import SuratPopulerComp from './components/SuratPopulerComp'

function App() {
  return (
    <div>
      <NavbarComp />
      <main className="max-w-7xl mx-auto px-4">
        <FeatureSection />
        <SuratPopulerComp />
        <DaftarSuratComp />
        <FooterComp />
      </main>
    </div>
  )
}

export default App
