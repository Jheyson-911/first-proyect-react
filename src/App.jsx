import './App.css';
import { About } from './components/body/About';
import { Acomplishment } from './components/body/Acomplishment';
import { Banner } from './components/body/Banner';
import { Contact } from './components/body/Contact';
import { I_Can_Do } from './components/body/I_Can_Do';
import { Navegacion } from './components/body/Navigation';
import { Footer } from './components/footer/Footer';
import { MainHeader } from './components/header/MainHeader';

function App() {
  return (
    <div className='App bg-[#f4f4f4] md:bg-white-main '>
      <MainHeader />
      <div className='md:flex'>
        <div className='md:w-full lg:w-[75%]'>
          <Banner />
          <div className='md:px-24'>
            <About />
            <I_Can_Do />
            <Acomplishment />
            <Contact />
            <Footer />
          </div>
        </div>
        <div className=' celular:hidden lg:block lg:w-[25%]'>
          <Navegacion />
        </div>
      </div>
    </div>
  );
}

export default App;
