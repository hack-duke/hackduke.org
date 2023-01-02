import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Events() {
    return (
        <>
            <Navbar color="" />
            <section className="section is-medium" id="about-hero">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">a</div>
                        <div className="column">b</div>
                    </div>
                </div>
            </section>
            <JoinUs />
            <Footer />
        </>
    );
}
