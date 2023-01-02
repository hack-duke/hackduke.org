import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import JoinUs from "../components/JoinUs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <>
            <Navbar color="#0042c6" />
            <div className="index">
                <div className="hero">
                    <HeroBackground />
                    <div className="logo">
                        <img src="/images/hd-logo.svg" />
                    </div>
                </div>
                <section className="section is-small">
                    <div className="container">
                        <div className="columns is-desktop">
                            <div className="column" id="index-s1-c1">
                                <div className="subtitle">
                                    We are a tech organization that brings
                                    together a multidisciplinary community at
                                    Duke to further social good. Sound
                                    interesting?
                                </div>
                                <div
                                    className="button"
                                    style={{ color: "#0042c6" }}>
                                    Read our story{" "}
                                    <FontAwesomeIcon
                                        className="fa-md faicon"
                                        icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="column" id="index-s1-c2">
                                <img
                                    id="index-s1-i1"
                                    src="/graphics/group1.svg"
                                />
                            </div>
                        </div>
                        <div className="columns is-desktop" id="index-s2">
                            <div
                                className="column"
                                id="index-s2-c1"
                                style={{ borderColor: "#36c69b" }}>
                                <img
                                    className="card-image"
                                    src="/graphics/community.svg"
                                />
                                <div className="card-title">Community</div>
                                <div className="card-text">
                                    We believe in fostering an internal,
                                    university, and local tech community that
                                    celebrates collaboration, diversity, and
                                    social impact.
                                </div>
                            </div>
                            <div
                                className="column"
                                id="index-s2-c2"
                                style={{ borderColor: "#f7af1d" }}>
                                <img
                                    className="card-image"
                                    src="/graphics/innovation.svg"
                                />
                                <div className="card-title">Innovation</div>
                                <div className="card-text">
                                    With our diverse skillsets and interests, we
                                    create extraordinary things that inspire
                                    others to create something cool. Let’s
                                    build!
                                </div>
                            </div>
                            <div
                                className="column"
                                id="index-s3-c2"
                                style={{ borderColor: "#e55511" }}>
                                <img
                                    className="card-image"
                                    src="/graphics/social.svg"
                                />
                                <div className="card-title">Social Good</div>
                                <div className="card-text">
                                    It’s not just about meaningful projects. We
                                    love to discuss, share, and bring to life
                                    ideas that aim to make a positive impact on
                                    social issues.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section is-medium">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div className="title">Who are we?</div>
                                <div className="subtitle">
                                    We are a diverse community of Duke students
                                    united by our love of building and using
                                    tech for social good. We are split into 6
                                    teams: Tech, Design, Logistics, Outreach,
                                    Sponsorship, and Marketing.
                                </div>
                                <div
                                    className="button"
                                    style={{ color: "#0042c6" }}>
                                    Meet our people{" "}
                                    <FontAwesomeIcon
                                        className="fa-md faicon"
                                        icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="column">
                                <img
                                    className="index-image"
                                    src="/images/team-2022.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section is-medium">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div
                                    className="columns is-multiline is-gapless"
                                    id="index-s4-i">
                                    <div className="column is-full">
                                        <img
                                            src="/images/cfg-2022-9.jpeg"
                                            className="index-image"
                                            id="index-s4-i1"
                                        />
                                    </div>
                                    <div className="column is-full">
                                        <img
                                            src="/images/cfg-2022-7.jpeg"
                                            className="index-image"
                                            id="index-s4-i2"
                                        />
                                    </div>
                                    <div className="column is-full">
                                        <img
                                            src="/images/cfg-2022-1.jpeg"
                                            className="index-image"
                                            id="index-s4-i3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="title">What do we do?</div>
                                <div className="subtitle">
                                    We organize Code for Good, the nation’s
                                    premier hackathon for social good. Our teams
                                    work together year-round to invite speakers,
                                    design resources, build platforms, and more
                                    to ensure the success of the event.
                                </div>
                                <div
                                    className="button"
                                    style={{ color: "#0042c6" }}>
                                    See our work{" "}
                                    <FontAwesomeIcon
                                        className="fa-md faicon"
                                        icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section is-medium">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div className="title">Why HackDuke?</div>
                                <div className="subtitle">
                                    Each year, our event brings in over 1000
                                    participants to craft solutions for social
                                    impact in the environment, inequality,
                                    education, and health fields. We provide the
                                    educational resources, inspirational
                                    speakers, mentorship, and nonprofit donation
                                    prizes to let others realize and unlock
                                    tech’s potential for social impact.
                                </div>
                                <div
                                    className="button"
                                    style={{ color: "#0042c6" }}>
                                    Join our team{" "}
                                    <FontAwesomeIcon
                                        className="fa-md faicon"
                                        icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="column">
                                <div
                                    className="columns is-multiline is-gapless"
                                    id="index-s5-i">
                                    <div className="column is-full">
                                        <img
                                            src="/images/cfg-2022-13.jpeg"
                                            className="index-image"
                                            id="index-s5-i1"
                                        />
                                    </div>
                                    <div className="column is-full">
                                        <img
                                            src="/images/cfg-2022-12.jpeg"
                                            className="index-image"
                                            id="index-s5-i2"
                                        />
                                    </div>
                                </div>
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
