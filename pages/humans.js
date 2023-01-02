import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Humans() {
    return (
        <>
            <Navbar color="#242424" />
            <div className="humans">
                <section className="section is-medium" id="humans-hero">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div
                                className="column is-three-fifths-desktop"
                                id="humans-hero-c1">
                                <div className="section-title">Hey!</div>
                                <div className="subtitle">
                                    We are a group of Duke students who work
                                    together to bring to life Code for Good and
                                    Ideate. Although we all have different
                                    interests and backgrounds, we value our
                                    community and are united by our passions in
                                    building something cool. We are split into 6
                                    teams (Tech, Design, Logistics, Outreach,
                                    Sponsorship, Marketing) and are lead by our
                                    two amazing co-directors!
                                </div>
                            </div>
                            <div
                                className="column is-two-fifths-desktop"
                                id="humans-hero-c2">
                                <img
                                    src="/images/team-2023.jpeg"
                                    id="humans-hero-i1"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
