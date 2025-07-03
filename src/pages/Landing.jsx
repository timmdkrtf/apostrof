import Navbar from "../components/Navbar"
import About from "../components/About"
import Service from "../components/Service"
import Book from "../components/Book"
import Footer from "../components/Footer"

function Landing(){
    return(
        <>
            <Navbar />
            <About />
            <Service />
            <Book />
            <Footer />
        </>
    );
}

export default Landing;