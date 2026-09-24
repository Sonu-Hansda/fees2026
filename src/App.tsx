import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutConference from "./components/AboutConference";
import ImportantDates from "./components/ImportantDates";
import CallForPapers from "./components/CallForPapers";
import Speakers from "./components/Speakers";
import Committee from "./components/Committee";
import Schedule from "./components/Schedule";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import PlacesNearby from "./components/PlacesNearby";
import HowToReach from "./components/HowToreachus";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutConference />
      <ImportantDates />
      <CallForPapers />
      <Speakers />
      <Committee />
      <Schedule />
      <Registration />
      <HowToReach />
      <PlacesNearby/>
      <Footer />
    </>
  )
}

export default App
