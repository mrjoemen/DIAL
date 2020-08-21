import React, { useEffect }  from 'react';
import useSpinner from './components/Spinner/useSpinner.js'
import Carousel from './components/Carousel.js'
import Navbar from './components/Navbar/Navbar.js'
import Intro from './components/Intro.js'
import Description from './components/Description/Description.js'
import Services from './components/Services/Services.js'
import MeetUs from './components/MeetUs.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
//CSS AND BOOTSRTAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //CSS has to be in this order
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/jquery/dist/jquery.min'
import '../node_modules/popper.js/dist/popper.min'
//import './css/fontawesome-all.css'
import './css/styles.css';


const App = () => {
    // Hooks
    const [spinner, showSpinner, hideSpinner] = useSpinner();


    useEffect(() => { // this is for the spinner, in which will be used later for loading 
        showSpinner()
        setTimeout(() => hideSpinner(), 1000) //setTimeout is just replicating the loading time
    }, [])

        return (
        <div>
            {spinner}
            <Navbar />
            <Carousel />
            <Intro />
            <Description />
            <Services />
            <MeetUs />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
