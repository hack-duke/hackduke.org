import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import Head from "next/head";

import { AiOutlineArrowRight } from "react-icons/ai";
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
                                HackDuke&apos;s recruiting for the Fall 2024 semester is in progress, and applications are now closed. Thanks for your interest!
                            </div>

                            {/* <div>
                                <a href="https://forms.gle/3Tpqhsody4fLacax9">
                                    <IconTextButton
                                        text="Apply Now"
                                        bgColorHex="#ffffff"
                                        extraClasses={[
                                            "before:bg-white",
                                            "relative mx-auto",
                                            "ml-0",
                                            "font-extrabold"
                                        ]}
                                        textColorHex="#ffffff"
                                        icon={
                                            <AiOutlineArrowRight
                                                size={28}
                                                className="pl-1"
                                            />
                                        }
                                    ></IconTextButton>
                                </a>
                            </div> */}

                            <p className="text-white font-sans text-xl mt-5">
                                If you&apos;re interested in keeping in touch, consider subscribing to <a className="underline underline-offset-4" href="https://4cf755e0.sibforms.com/serve/MUIFALiSxUb-UbEAKTWwxl4r6uzEgJkMYBwPeGArqz6Dc78q4bVLiOoWuzWJNYVaOYgJ6NTbHItNhNJmU4BsKSxu5qAg0rXe1w11tNN8UQ-TFR_O90kWXAa4qCXMKlmc4SYJkRxB_803SU1pRjkql3hSxx_9hhOgqDpzFKY89NGHtjRghT1VgopJQZKmDxMX2ML9En7SEGQrCmOQ">our newsletter</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
