import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import './App.css'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'

// pages
import Home from './pages/Home/Home'
import PlanYourTrip from './pages/PlanYourTrip/PlanYourTrip'
import GroupTrip from './pages/GroupTrip/GroupTrip'
import Journeys from './pages/Journeys/Journeys'
import OurStory from './pages/OurStory/OurStory'
import Contact from './pages/Contact/Contact'
import Faq from './pages/Faq/Faq'

import { KonichiwaJapan24th2ndApril } from './pages/KonichiwaJapan24th2ndApril/KonichiwaJapan24th2ndApril'
import { KonichiwaJapan15thMay } from './pages/KonichiwaJapan15thMay/KonichiwaJapan15thMay'
import { SouthKorea2nd10thApril } from './pages/SouthKorea2nd10thApril/SouthKorea2nd10thApril'

import DestinationCard from './pages/DestinationCard'
import DestinationDetail from './admin/DestinationDetail'

// admin
import AddDestination from './admin/AddDestination'
import AdminLogin from './pages/AdminLogin'
import AdminProtectedRoute from './config/AdminProtectedRoute'

/* ================= LAYOUT WRAPPER ================= */
const LayoutWrapper = ({ children }) => {
  const location = useLocation()

  // sirf admin login pe navbar/footer hide
  const hideLayout = location.pathname === '/admin/login'

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}

/* ================= APP ================= */
const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />

        <LayoutWrapper>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/grouptrip" element={<GroupTrip />} />
            <Route path="/plan-your-trip" element={<PlanYourTrip />} />
            <Route path="/journeys" element={<Journeys />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />

            {/* TRIPS */}
            <Route path="/konichiwaa-japan-24th-2nd-april" element={<KonichiwaJapan24th2ndApril />} />
            <Route path="/konichiwaa-japan-15th-may" element={<KonichiwaJapan15thMay />} />
            <Route path="/southkorea-2nd-10th-april" element={<SouthKorea2nd10thApril />} />

            <Route path="/DestinationCard" element={<DestinationCard />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />

            {/* ADMIN */}
            <Route
              path="/admin"
              element={
                <AdminProtectedRoute>
                  <AddDestination />
                </AdminProtectedRoute>
              }
            />

            {/* ADMIN LOGIN (NO NAVBAR / FOOTER) */}
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </LayoutWrapper>

      </Router>
    </div>
  )
}

export default App
