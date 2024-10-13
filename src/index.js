import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import APropos from './pages/A-Propos'
import FicheLogement from './pages/Fiche-Logement'
import Error from './pages/Error'

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
