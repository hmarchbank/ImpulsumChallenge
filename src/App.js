import logo from './logo.svg';
import './App.css';
import { Button, Text } from '@cmpsr/components';
import Header from './landing-page-components/Header'
import SectionOne from './landing-page-components/SectionOne'
import SectionTwo from './landing-page-components/SectionTwo'
import SectionThree from './landing-page-components/SectionThree'
import Footer from './landing-page-components/Footer'

console.log(Button)


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
