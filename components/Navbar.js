import { useRouter } from "next/router";
import { useState } from "react";
// import "../styles/navbar.css";

function Navbar() {
    const router = useRouter();
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <>
            <nav
                className={"navbar"}
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://hackduke.org">
                        <img
                            src="/images/hd-symbol.svg"
                            width="112"
                            // height="28"
                        />
                    </a>
                    <a
                        role="button"
                        className={
                            "navbar-burger" + (isExpanded ? " is-active" : "")
                        }
                        // onclick toggle expanded
                        onClick={() => {
                            toggleExpansion(!isExpanded);
                        }}
                        aria-label="menu"
                        aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    className={
                        "navbar-menu" + (isExpanded ? " is-active" : "")
                    }>
                    <div className="navbar-end">
                        <div
                            className="navbar-item navbar-button"
                            onClick={() => {
                                router.push("/about");
                            }}>
                            About
                        </div>
                        <div
                            className="navbar-item navbar-button"
                            onClick={() => {
                                router.push("/humans");
                            }}>
                            Humans
                        </div>
                        <div
                            className="navbar-item navbar-button"
                            onClick={() => {
                                router.push("/events");
                            }}>
                            Events
                        </div>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a
                                    className="button is-primary"
                                    onClick={() => {
                                        router.push("/join");
                                    }}>
                                    <strong>Join Us!</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
