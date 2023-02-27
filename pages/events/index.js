import Navbar from "../../components/Navbar";
import SponsorUs from "../../components/SponsorUs";
import Footer from "../../components/Footer";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

export default function Events() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Events | HackDuke</title>
            </Head>
            <Navbar color="#36c69b" />
            <section className="section is-small" id="events-hero">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div className="section-title">Events</div>
                            <div className="subtitle">
                                Each year, our teams organize two conferences
                                that attract participants all over the country:
                                Code for Good and Ideate. You might have heard
                                about them :)
                            </div>
                            <img
                                id="events-hero-i1"
                                src="/graphics/building.svg"
                            />
                        </div>
                        <div className="column">
                            <div className="scoreboard">
                                <div className="scoreboard-title">
                                    Code for Good 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            264
                                        </div>
                                        <div className="scoreboard-text">
                                            Participants
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            35
                                        </div>
                                        <div className="scoreboard-text">
                                            Hacks
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            $3300
                                        </div>
                                        <div className="scoreboard-text">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scoreboard">
                                <div className="scoreboard-title">
                                    Ideate 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            234
                                        </div>
                                        <div className="scoreboard-text">
                                            Registrants
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            18
                                        </div>
                                        <div className="scoreboard-text">
                                            Pitches
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            $1500
                                        </div>
                                        <div className="scoreboard-text">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium" id="feb18">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div className="title">Feb 18 Speaker Event</div>
                            <div className="subtitle">
                                <p>
                                    We&apos;re excited to welcome Robert Vila, a
                                    Director @ IBM to speak about his experience
                                    in the technical and business requirements
                                    for successful SaaS. The event is{" "}
                                    <b>
                                        Feb 18, 2023 from 1-2pm in Wilkinson 136
                                    </b>
                                    .
                                    <br />
                                    <br />
                                    Chick-fil-A catering will be served and we
                                    hope to see you there!
                                </p>
                            </div>
                            <div
                                className="button"
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    // gtag('event', 'event_form_open')
                                    router.push(
                                        "https://www.linkedin.com/feed/update/urn:li:activity:7032811883829051392"
                                    );
                                }}
                            >
                                See the event{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}
                                ></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="column">
                            <img
                                className="events-image"
                                src="/images/RobertVilaTalk.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium" id="code-for-good">
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
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    router.push("https://2022.hackduke.org");
                                }}
                            >
                                Code For Good 2022{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}
                                ></FontAwesomeIcon>
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
            <section className="section is-medium" id="ideate">
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
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    router.push("https://ideate.hackduke.org");
                                }}
                            >
                                Ideate 2022{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}
                                ></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SponsorUs />
            <Footer />
        </>
    );
}
