import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import IconTextButton from "../components/IconTextButton";

export default function Join() {
    return (
        <>
            <Head>
                <title>Join | HackDuke</title>
            </Head>
            <Navbar color="#0042c6" />
            <div className="join">
                <div className="hero">
                    <HeroBackground />
                    <div id="join-hero">
                        <div className="container">
                            <div className="section-title">Join HackDuke!</div>
                            <div className="subtitle">
                                Thanks for your interest in joining HackDuke!
                                Our organizer team applications are now closed
                                for this semester. If you have applied, we will
                                reach out about interviews soon. However, if you
                                would like to hear about our latest events,
                                please subscribe to the newsletter.
                            </div>

                            <div>
                                <a href="https://4cf755e0.sibforms.com/serve/MUIEAAcE4j7UohciQWxL1OD-ek-BsIe709PlDqlo2iJqTPxKsdDZcQMilgW4PLJlabuxJCYisXPeMUoU8-72KjY8Jp8HRdVc8vs5B6jCEdO-8R8wS-T0t6u5kDrdRQ8OGrA8019LVSP-8CKlETD2QIJ9tn1yBYpW_l3AFjfbq3FhhcFLnat77sRkg-aXnQKmAMNS_p-3-cQWYBfu">
                                    <IconTextButton
                                        text="Subscribe now"
                                        bgColorHex="#ffffff"
                                        extraClasses={[
                                            "before:bg-white",
                                            "relative mx-auto",
                                            "ml-0",
                                        ]}
                                        textColorHex="#ffffff"
                                        onClick={() =>
                                            gtag("event", "newsletter_open")
                                        }
                                        icon={faArrowRight}
                                    ></IconTextButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
