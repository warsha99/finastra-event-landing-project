// src/App.js
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import KeyThemes from './components/KeyThemes';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Partners from './components/Partners';
import Registration from './components/Registration';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <EventDetails />
      <KeyThemes />
      <Speakers />
      <Agenda />
      <Partners />
      <Registration />
      <Footer />
    </div>
  );
}