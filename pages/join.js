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
                            <div className="section-title">Join HackDuke!</div>
                            <div className="subtitle">
                                Thanks for your interest in joining HackDuke!
                                Our applications are now open.
                                Please fill out our application before <b>Feb 12, 2023 @ 11:59pm</b>.
                            </div>
                        <a
                        className="button"
                        id="about-hero-button"
                        style={{ color: "#ffffff" }}
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdsAd61aROcqTUNOzixnZ78DpLYM1KgIWWqMTXOxa91Pm1yKg/viewform">
                        Apply now{" "}
                        <FontAwesomeIcon
                            className="fa-md faicon"
                            icon={faArrowRight}></FontAwesomeIcon>
                        </a>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
