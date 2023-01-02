import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Events() {
    return (
        <>
            <Navbar color="#36c69b" />
            <section className="section is-small" id="events-hero">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div className="section-title">Events</div>
                            <div className="subtitle">
                                Each year, our teams organize two conferences
                                that each attracts over 1000 participants: Code
                                for Good and Ideate. You might have heard about
                                them :)
                            </div>
                            <img
                                id="events-hero-i1"
                                src="/graphics/building.svg"
                            />
                        </div>
                        <div className="column">
                            <div className="scoreboard">
                                <div className="scoreboard-title">
                                    Code for Good 2020
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            1048
                                        </div>
                                        <div className="scoreboard-text">
                                            Registrants
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            115
                                        </div>
                                        <div className="scoreboard-text">
                                            Hacks
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            $4000
                                        </div>
                                        <div className="scoreboard-text">
                                            Donated
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scoreboard">
                                <div className="scoreboard-title">
                                    Ideate 2020
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            651
                                        </div>
                                        <div className="scoreboard-text">
                                            Registrants
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            54
                                        </div>
                                        <div className="scoreboard-text">
                                            Submissions
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            $2400
                                        </div>
                                        <div className="scoreboard-text">
                                            Donated
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div className="title">Code For Good</div>
                            <div className="subtitle">
                                Code for Good is the nation’s premier hackathon
                                for tech and social good. We unite students that
                                are passionate about changing the intention and
                                narrative behind how technology is used today to
                                create meaningful hacks in a 24-hour sprint. Our
                                goal is to facilitate an environment where
                                students can create meaningful technical
                                projects or learn the skills to get there.
                            </div>
                            <div
                                className="button"
                                style={{ color: "#0042c6" }}>
                                Code For Good 2022{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="column">
                            <img
                                className="events-image"
                                src="/images/cfg-2022-3.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium" id="events-s2">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <img
                                className="events-image"
                                id="events-s2-i2"
                                src="/images/ideate-2018-1.png"
                            />
                            <img
                                className="events-image"
                                id="events-s2-i3"
                                src="/images/ideate-2018-2.png"
                            />
                        </div>
                        <div className="column">
                            <div className="title">Ideate</div>
                            <div className="subtitle">
                                Ideate is a two-day conference filled with
                                awesome speakers and workshops to explore how
                                design and innovation interact. The designathon
                                aims to observe how design thinking can be
                                applied across fields, and is open to design
                                aficionados, curious newcomers, and everyone in
                                between!
                            </div>
                            <div
                                className="button"
                                style={{ color: "#0042c6" }}>
                                Ideate 2021{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <JoinUs />
            <Footer />
        </>
    );
}
