import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Join() {
    return (
        <>
            <Navbar />
            <div className="join">
                <div className="hero">
                    <HeroBackground />
                    <div>Join Us</div>
                </div>
            </div>
            <Footer />
        </>
    );
}
