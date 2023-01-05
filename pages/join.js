import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Join() {
    return (
        <>
            <Navbar color="#0042c6" />
            <div className="join">
                <div className="hero">
                    <HeroBackground />
                    <div id="join-hero">
                        <div className="container">
                            <div className="section-title">Join Our Team!</div>
                            <div className="subtitle">
                                Thanks for your interest in joining HackDuke!
                                Our next recruiting cycle starts Spring 2023.
                                More information will be released soon.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
