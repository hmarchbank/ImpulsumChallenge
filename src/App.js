import './App.css';
import Header from './landing-page-components/Header'
import SectionOne from './landing-page-components/SectionOne'
import SectionTwo from './landing-page-components/SectionTwo'
import SectionThree from './landing-page-components/SectionThree'
import Footer from './landing-page-components/Footer'

function App() {
  return (
    <div className="App">
        <Header/>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
    </div>
  );
}

export default App;
