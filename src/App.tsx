import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Doctors } from './components/Doctors/Doctors'
import { HealthcareServices } from './components/HealthcareServices/HealthcareServices'
import { SustainableHealthcare } from './components/SustainableHealthcare/SustainableHealthcare'
import { HealthCheckup } from './components/HealthCheckup/HealthCheckup'
import { Insights } from './components/Insights/Insights'
import { HospitalStory } from './components/HospitalStory/HospitalStory'
import { Accreditations } from './components/Accreditations/Accreditations'
import { Contact } from './components/Contact/Contact'
import { Chatbot } from './components/Chatbot/Chatbot'
import { Footer } from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Doctors />
        <HealthcareServices />
        <SustainableHealthcare />
        <HealthCheckup />
        <Insights />
        <HospitalStory />
        <Accreditations />
        <div id="academics" className="page-section" />
        <div id="career" className="page-section" />
        <Contact />
        <div id="pharmacy-college" className="page-section" />
        <div id="nursing-college" className="page-section" />
        <div id="dmlt-college" className="page-section" />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
