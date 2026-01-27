import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import PlanYourTrip from './pages/PlanYourTrip/PlanYourTrip'
import GroupTrip from './pages/GroupTrip/GroupTrip'
import Journeys from './pages/Journeys/Journeys'
import OurStory from './pages/OurStory/OurStory'
import Contact from './pages/Contact/Contact'
import StartPlanning from './pages/StartPlanning/StartPlanning'
import Faq from './pages/Faq/Faq'
import { KonichiwaJapan24th2ndApril } from './pages/KonichiwaJapan24th2ndApril/KonichiwaJapan24th2ndApril'
import { KonichiwaJapan15thMay } from './pages/KonichiwaJapan15thMay/KonichiwaJapan15thMay'
import { SouthKorea2nd10thApril } from './pages/SouthKorea2nd10thApril/SouthKorea2nd10thApril'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
    return (
        <div>
            <Router>
                <ScrollToTop />

                <Navbar />
                <Routes>
                    {/* Define your routes here */}
                    <Route path="/" element={< Home />} />
                    <Route path='/grouptrip' element={< GroupTrip />} />
                    <Route path='/plan-your-trip' element={< PlanYourTrip />} />
                    <Route path='/journeys' element={< Journeys />} />
                    <Route path='/our-story' element={< OurStory />} />
                    <Route path='/faq' element={< Faq />} />
                    <Route path='/contact' element={< Contact />} />
                    <Route path='/konichiwaa-japan-24th-2nd-april' element={< KonichiwaJapan24th2ndApril />} />
                    <Route path="/konichiwaa-japan-15th-may" element={< KonichiwaJapan15thMay />} />
                    <Route path="/southkorea-2nd-10th-april" element={< SouthKorea2nd10thApril />} /> {/* <Route path='start-planning' element={<StartPlanning />}/> */}
                </Routes>
                <Footer />
            </Router>

        </div>
    )
}

export default App