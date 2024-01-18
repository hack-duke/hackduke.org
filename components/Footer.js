import { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "./Image";
import FooterElement from "./FooterElement";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(props) {
    const router = useRouter();
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="columns is-desktop">
                        <div
                            className="column is-two-fifths-desktop is-full"
                            id="footer-top"
                        >
                            <div className="logo">
                                <Image
                                    src="/images/hd-logo.svg"
                                    alt="HackDuke Logo"
                                    extraClasses="logo"
                                />
                            </div>
                            <div className="footer-text">
                                <div className="column-text">
                                    <p>
                                        <a
                                            href="mailto:hackers@hackduke.org"
                                            style={{ color: "#ffffff" }}
                                        >
                                            hackers@hackduke.org
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="footer-icons">
                                <FaFacebook className="fa-lg faicon" onClick={() => {
                                    window.open(
                                        "https://www.facebook.com/hackduke",
                                        "_blank"
                                    );
                                }} />

                                <FaInstagram className="fa-lg faicon" onClick={() => {
                                    window.open(
                                        "https://www.instagram.com/hackduke/",
                                        "_blank"
                                    );
                                }} />

                                <FaTwitter className="fa-lg faicon" onClick={() => {
                                    window.open(
                                        "https://twitter.com/hackduke",
                                        "_blank"
                                    );
                                }} />
                            </div>
                        </div>
                        <div
                            className="column is-three-fifths-desktop is-full"
                            id="footer-bot"
                        >
                            <div className="columns is-mobile is-multiline">
                                <div className="column is-half-mobile">
                                    <div className="column-title">About</div>

                                    <FooterElement
                                        link="/about"
                                        text="Our Story"
                                    />

                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Humans</div>

                                    <FooterElement
                                        link="/humans#Directors"
                                        text="Directors"
                                    />

                                    <FooterElement
                                        link="/humans#Tech"
                                        text="Teams"
                                    />

                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Events</div>

                                    <FooterElement
                                        link="/events#code-for-good"
                                        text="Code For Good"
                                    />

                                    <FooterElement
                                        link="/events#ideate"
                                        text="Ideate"
                                    />

                                    <FooterElement
                                        link="/events#sponsor-us"
                                        text="Sponsor Us"
                                    />
                                    
                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Join</div>

                                    <FooterElement
                                        link="/join"
                                        text="Newsletter"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="footer-message">
                        <div>
                            Designed by Maggie Wang &apos;22, implemented with ♥
                        </div>
                        <div className="mt-2 inline-block">
                            Copyright © 2023 HackDuke —{" "}
                            <div className="inline-block">
                                <div
                                    className="column-small-text"
                                    onClick={() => {
                                        router.push("/privacy");
                                    }}
                                >
                                    <p>Privacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
