
import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Navabr from './Components/Navabr';
import Preloader from './Components/Preloader';
import PopupForm from './Components/PopupForm';

function App() {

  const [isLoaded, setIsLoaded] = useState(false)

    const handleLoad = () => {
        setIsLoaded(true);
    };

  return (
    <div className='App'>
      

    {!isLoaded && <Preloader onLoad={handleLoad} />}
            {isLoaded && (
                <div>
                <Navabr/>
                <Body/>
                <PopupForm/>
                <Footer/>
                </div>
            )}


    {/* <div className="App">
      <Navabr/>
      <Body/>
      <Footer/>
    </div> */}
    </div>
  );
}

export default App;
