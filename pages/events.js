import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Events() {
    return (
        <>
            <Navbar color="" />
            <section className="section is-medium" id="events-hero">
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
                                <div className="columns is-mobile is-vcentered">
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
                                <div className="columns is-mobile is-vcentered">
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

            <JoinUs />
            <Footer />
        </>
    );
}
