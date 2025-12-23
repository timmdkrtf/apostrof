import Navbar from "../components/Navbar"
import About from "../components/About"
import Service from "../components/Service"
import Book from "../components/Book"
import Footer from "../components/Footer"

function Landing(){
    return(
        <div className="paper-texture">
            <Navbar />
            <About />
            <Service />
            <Book />
            <Footer />
        </div>
    );
}

export default Landing;