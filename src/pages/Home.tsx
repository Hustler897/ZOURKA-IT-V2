import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Offers from '../components/Offers';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            // Wait a tick so sections are mounted
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <Offers />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
