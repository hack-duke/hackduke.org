import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Join() {
    return (
        <>
            <Navbar color="#0042c6" />
            <div className="join">
                <div className="hero">
                    <HeroBackground />
                    <div id="join-hero">
                        <div className="container">
                            <div className="section-title">Join HackDuke!</div>
                            <div className="subtitle">
                                Thanks for your interest in joining HackDuke!
                                Our next recruiting cycle starts Spring 2023.
                                Please join our mailing list so you get the important details about the process.
                            </div>
                        <a
                        className="button"
                        id="about-hero-button"
                        style={{ color: "#ffffff" }}
                        href="https://4cf755e0.sibforms.com/serve/MUIEAOybFH25Vpsrd1yTJY8Isep_0XVWnJ3nCkVDVbtlJPKJyIc6ZocylLiNDnnfNP8sOrw_QIs_o9SXsM6Qa2CLeXYKvg4bJNBh39rAN2LUkDRoZsUaqDsnGH_Ja9FFqD4cW1o0pseW_Jsuy1qT_PfWhWwR2zwicw5VXz1qku5Ui_BbQ4ffyT5wcAd_IhZcDVuWK__AawXEUaae">
                        Subscribe to our mailing list{" "}
                        <FontAwesomeIcon
                            className="fa-md faicon"
                            icon={faArrowRight}></FontAwesomeIcon>
                        </a>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
