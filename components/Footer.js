import { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "./Image";

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
                                            href="mailto:contact@hackduke.org"
                                            style={{ color: "#ffffff" }}
                                        >
                                            contact@hackduke.org
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
                        <div>
                            Designed by Maggie Wang &apos;22, implemented with ♥
                        </div>
                        <div class="mt-2 inline-block">
                            Copyright © 2023 HackDuke —{" "}
                            <div class="inline-block">
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
                    {/* <div class="mt-8 flex justify-center text-base"></div> */}
                </div>
            </footer>
        </>
    );
}

export default Footer;
