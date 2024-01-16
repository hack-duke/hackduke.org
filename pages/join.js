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
                                HackDuke is recruiting for the Spring 2024
                                semester. We are looking for students who are
                                excited about building and maintaining impactful
                                operations and organizing engaging events.
                                HackDuke will host two information sessions this
                                semester. It is strongly recommended to attend
                                an info session.
                                <ul class="mt-4 max-w-prose list-inside list-disc">
                                    <li>
                                        Jan 18th @ 7:00pm in Wilkinson 126
                                        (West)
                                    </li>
                                    <li>
                                        Jan 20th @ 2:00pm in Classroom 103
                                        (East)
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <a href="https://forms.gle/DLKvUJpn46FcWHwc8">
                                    <IconTextButton
                                        text="Apply now"
                                        bgColorHex="#ffffff"
                                        extraClasses={[
                                            "before:bg-white",
                                            "relative mx-auto",
                                            "ml-0",
                                        ]}
                                        textColorHex="#ffffff"
                                        onClick={() =>
                                            gtag("event", "apply_open")
                                        }
                                        icon={
                                            <AiOutlineArrowRight
                                                size={28}
                                                className="pl-1"
                                            />
                                        }
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
