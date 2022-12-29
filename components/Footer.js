import { useRef } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="columns is-desktop">
                        <div
                            className="column is-two-fifths-desktop is-full"
                            id="footer-top">
                            <div className="logo">
                                <img src="/images/hd-logo.svg" />
                            </div>
                            <div className="footer-text">
                                hackers@hackduke.org
                            </div>
                            <div className="footer-icons">
                                <FontAwesomeIcon
                                    className="fa-lg faicon"
                                    icon={fab.faFacebook}
                                    onClick={() => {
                                        window.open(
                                            "https://www.facebook.com/hackduke",
                                            "_blank"
                                        );
                                    }}></FontAwesomeIcon>
                                <FontAwesomeIcon
                                    className="fa-lg faicon"
                                    icon={fab.faInstagram}
                                    onClick={() => {
                                        window.open(
                                            "https://www.instagram.com/hackduke/",
                                            "_blank"
                                        );
                                    }}></FontAwesomeIcon>
                                <FontAwesomeIcon
                                    className="fa-lg faicon"
                                    icon={fab.faTwitter}
                                    onClick={() => {
                                        window.open(
                                            "https://twitter.com/hackduke",
                                            "_blank"
                                        );
                                    }}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div
                            className="column is-three-fifths-desktop is-full"
                            id="footer-bot">
                            <div className="columns is-mobile is-multiline">
                                <div className="column is-half-mobile">
                                    <div className="column-title">About</div>
                                    <div className="column-text">Main</div>
                                    <div className="column-text">Our Story</div>
                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Humans</div>
                                    <div className="column-text">Directors</div>
                                    <div className="column-text">Tech</div>
                                    <div className="column-text">Design</div>
                                    <div className="column-text">Logistics</div>
                                    <div className="column-text">Outreach</div>
                                    <div className="column-text">
                                        Sponsorship
                                    </div>
                                    <div className="column-text">Marketing</div>
                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Events</div>
                                    <div className="column-text">
                                        Code For Good
                                    </div>
                                    <div className="column-text">Ideate</div>
                                    <div className="column-text">
                                        Sponsor Us
                                    </div>
                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Join</div>
                                    <div className="column-text">Process</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="footer-message">
                        Copyright © 2023 HackDuke — Designed by Maggie Wang '22,
                        implemented with ♥
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
