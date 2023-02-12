import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroBackground from "../../components/HeroBackground";
import Head from "next/head"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Feb18() {
    return (
        <>
            <Head>
                <title>Feb 18 Event | HackDuke</title>
            </Head>
            <Navbar color="#0042c6" />
            <div className="join">
                <div className="hero">
                    <HeroBackground />
                    <div id="join-hero">
                        <div className="container">
                            <div className="section-title">Feb 18 Speaker Event</div>
                            <div className="subtitle">
                                <p>
                                We're excited to welcome Robert Vila, a Director @ IBM
                                to speak about his experience in the technical and business requirements for successful SaaS.
                                The event is <b>Feb 18, 2023 from 1-2pm in Wilkinson 136</b>.
                                <br />
                                <br />
                                Please fill out our interest form by <b>Feb 17, 2023 @ 11:59pm</b> if you are interested.
                                Chick-fil-A catering will be served and we hope to see you there!
                                </p>
                            </div>
                        <a
                        className="button"
                        id="about-hero-button"
                        style={{ color: "#ffffff" }}
                        href="https://forms.gle/BZgGppMWKMkz1r3r5"
                        onClick={() => gtag('event', 'event_form_open')}>
                        Sign up now{" "}
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
