import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about">
                <section className="section is-medium" id="about-hero">
                    <div className="container">
                        <div className="section-title">Mission</div>
                        <div className="subtitle">
                            HackDuke brings together Duke students with the goal
                            of improving meaningful student engagement with the
                            intersection of tech, design, and social good.
                        </div>
                        <div className="subtitle">
                            Through our annual hackathon and designathon, we
                            unite students across the globe and encourage them
                            to think critically about the role of technology in
                            our communities. Within our Duke/Durham community,
                            we host workshops to promote education for all and
                            partner with local nonprofits to connect and give
                            back.
                        </div>
                        <div
                            className="button"
                            id="about-hero-button"
                            style={{ color: "#ffffff" }}>
                            More about our events{" "}
                            <FontAwesomeIcon
                                className="fa-md faicon"
                                icon={faArrowRight}></FontAwesomeIcon>
                        </div>
                    </div>
                </section>
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
