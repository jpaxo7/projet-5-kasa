import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './pages/Home/home'
import APropos from './pages/A-Propos/a_propos'
import FicheLogement from './pages/Fiche-Logement/fiche_logement'
import Error from './pages/Error/error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/A-Propos" element={<APropos />} />
        <Route path="/pages/Fiche-Logement/:id" element={<FicheLogement />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
