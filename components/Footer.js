import { useRef } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
                                <img src="/images/hd-logo.svg" />
                            </div>
                            <div className="footer-text">
                                <div className="column-text">
                                    <p>
                                        <a
                                            href="mailto:contact@hackduke.org"
                                            style={{ color: "#ffffff" }}
                                        >
                                            contact@hackduke.org
                                        </a>
                                    </p>
                                </div>
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
                                    }}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                    className="fa-lg faicon"
                                    icon={fab.faInstagram}
                                    onClick={() => {
                                        window.open(
                                            "https://www.instagram.com/hackduke/",
                                            "_blank"
                                        );
                                    }}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                    className="fa-lg faicon"
                                    icon={fab.faTwitter}
                                    onClick={() => {
                                        window.open(
                                            "https://twitter.com/hackduke",
                                            "_blank"
                                        );
                                    }}
                                ></FontAwesomeIcon>
                            </div>
                        </div>
                        <div
                            className="column is-three-fifths-desktop is-full"
                            id="footer-bot"
                        >
                            <div className="columns is-mobile is-multiline">
                                <div className="column is-half-mobile">
                                    <div className="column-title">About</div>
                                    <div
                                        className="column-text"
                                        onClick={() => {
                                            router.push("/about");
                                        }}
                                    >
                                        <p>Our Story</p>
                                    </div>
                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Humans</div>
                                    <div
                                        className="column-text"
                                        onClick={() => {
                                            router.push("/humans#Directors");
                                        }}
                                    >
                                        <p>Directors</p>
                                    </div>
                                    <div
                                        className="column-text"
                                        onClick={() => {
                                            router.push("/humans#Tech");
                                        }}
                                    >
                                        <p>Teams</p>
                                    </div>
                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Events</div>
                                    <div
                                        className="column-text"
                                        onClick={() => {
                                            router.push(
                                                "/events#code-for-good"
                                            );
                                        }}
                                    >
                                        <p>Code For Good</p>
                                    </div>
                                    <div
                                        className="column-text"
                                        onClick={() => {
                                            router.push("/events#ideate");
                                        }}
                                    >
                                        <p>Ideate</p>
                                    </div>
                                    <div
                                        className="column-text"
                                        onClick={() => {
                                            router.push("/events/feb18");
                                        }}
                                    >
                                        <p>Feb 18</p>
                                    </div>
                                    <div
                                        className="column-text"
                                        onClick={() => {
                                            router.push("/events#sponsor-us");
                                        }}
                                    >
                                        <p>Sponsor Us</p>
                                    </div>
                                </div>
                                <div className="column is-half-mobile">
                                    <div className="column-title">Join</div>
                                    <div
                                        className="column-text"
                                        onClick={() => {
                                            router.push("/join");
                                        }}
                                    >
                                        <p>Newsletter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="footer-message">
                        Copyright © 2023 HackDuke — Designed by Maggie Wang
                        &apos;22, implemented with ♥
                    </div>
                    <div class="mt-8 flex justify-center text-base"> 
                    <Link
                    href="/privacy"
                    class="hover:underline"
                    >
                    Privacy
                    </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
