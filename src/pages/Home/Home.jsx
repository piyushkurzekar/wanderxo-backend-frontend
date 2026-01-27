import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Difference from '../../components/Difference/Difference.jsx'
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations.jsx'
import BookingSteps from '../../components/BookingSteps/BookingSteps.jsx'
import Specializations from '../../components/Specializations/Specializations.jsx'
import HowItWorks from '../../components/HowItWorks/HowItWorks.jsx'
import PopularJourneys from '../../components/PopularJourneys/PopularJourneys.jsx'
import Testimonials from '../../components/Testimonials/Testimonials.jsx'
import StartPlanning from '../../components/StartPlanning/StartPlanning.jsx'
// import TravelStyles from '../../components/TravelStyles/TravelStyles.jsx'
// import TravelStats from '../../components/TravelStats/TravelStats.jsx'
// import PreFooterContact from '../../components/PreFooterContact/PreFooterContact.jsx'

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularJourneys />
            <HowItWorks />
            <Difference />
            {/* <Testimonials /> */}
            <StartPlanning />
            {/* <TravelStyles /> */}
            {/* <TravelStats /> */}
            {/* <PreFooterContact /> */}
            {/* <PopularDestinations /> */}
            {/* <BookingSteps /> */}
            {/* <Specializations /> */}
        </div>
    )
}

export default Home