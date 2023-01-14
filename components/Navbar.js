import { useRouter } from "next/router";
import { useState } from "react";

function Navbar(props) {
    const router = useRouter();
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <>
            <nav
                className={"navbar"}
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <div
                        className="navbar-item"
                        id="navbar-logo"
                        onClick={() => {
                            router.push("/");
                        }}>
                        <img id="hd-logo" src="/images/hd-symbol.svg" />
                    </div>
                    <a
                        role="button"
                        className={
                            "navbar-burger" + (isExpanded ? " is-active" : "")
                        }
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
                    className={"navbar-menu" + (isExpanded ? " is-active" : "")}
                    // style background color
                    style={{ backgroundColor: props.color }}>
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
                        <div
                            className="navbar-item navbar-button"
                            onClick={() => {
                                router.push("/join");
                            }}>
                            Join Us
                        </div>
                        {/* <div
                            className="navbar-item navbar-button"
                            onClick={() => {
                                router.push("/");
                            }}>
                            Login
                        </div> */}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
