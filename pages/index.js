import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    // const myRef = useRef(null);
    // const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <>
            <Navbar color="#0042c6" />
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
                                We are a tech organization that brings together
                                a multidisciplinary community at Duke to further
                                social good. Sound interesting?
                            </div>
                            <div
                                className="button"
                                id="index-s1-b1"
                                style={{ color: "#0042c6" }}>
                                Read our story{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="column" id="index-s1-c2">
                            <img id="index-s1-i1" src="/graphics/group1.svg" />
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
                                We believe in fostering an internal, university,
                                and local tech community that celebrates
                                collaboration, diversity, and social impact.
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
                                create extraordinary things that inspire others
                                to create something cool. Let’s build!
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
                                It’s not just about meaningful projects. We love
                                to discuss, share, and bring to life ideas that
                                aim to make a positive impact on social issues.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="section is-small">
                <div className="container"></div>
            </section> */}
            <Footer />
        </>
    );
}
