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
                                {/* Check out HackDuke&apos;s Fall 2025 info sessions:
                                <div className="flex justify-center w-full mt-2">
                                    <div className="text-left">
                                        <ul className="list-disc pl-5">
                                            <li><strong className="!text-white">September 7th</strong> from <strong className="!text-white">3:00 - 4:30 PM</strong> in Friedl 107</li>
                                            <li><strong className="!text-white">September 8th</strong> from <strong className="!text-white">8:00 - 9:30 PM</strong> in White Lecture Hall</li>
                                        </ul>
                                    </div>
                                </div> */}
                                The HackDuke team recruits annually in the Fall semester. We host multiple info sessions and table at multiple
                                student organization fairs. Feel free to speak to team members at our <a className="!font-bold underline underline-offset-4" href="https://2026.hackduke.org/">2026 Code for Good</a> hackathon as well!
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

                            <p className="text-white font-sans text-xl mt-5 max-w-2xl">
                                Subscribe to <a className="!font-bold underline underline-offset-4" href="https://4cf755e0.sibforms.com/serve/MUIFALiSxUb-UbEAKTWwxl4r6uzEgJkMYBwPeGArqz6Dc78q4bVLiOoWuzWJNYVaOYgJ6NTbHItNhNJmU4BsKSxu5qAg0rXe1w11tNN8UQ-TFR_O90kWXAa4qCXMKlmc4SYJkRxB_803SU1pRjkql3hSxx_9hhOgqDpzFKY89NGHtjRghT1VgopJQZKmDxMX2ML9En7SEGQrCmOQ">our newsletter</a> and
                                follow us on Instagram @hackduke for updates throughout the year!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
