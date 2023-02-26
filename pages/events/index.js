import Navbar from "../../components/Navbar";
import SponsorUs from "../../components/SponsorUs";
import Footer from "../../components/Footer";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

export default function Events() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Events | HackDuke</title>
            </Head>
            <Navbar color="#36c69b" />
            <section className="section is-small" id="events-hero" class="bg-[#36c69b] min-h-screen pt-40">
                <div class="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div class="font-['Oxygen'] font-semibold text-[3rem] text-black mb-8">
                                Events
                            </div>
                            <div class="text-[#000000] font-['Oxygen] text-[1.25rem] mb-2 leading-tight">
                                Each year, our teams organize two conferences
                                that attract participants all over the country: Code
                                for Good and Ideate. You might have heard about
                                them :)
                            </div>
                            <img
                                class="w-4/5 mt-[10%] ml-[10%]"
                                src="/graphics/building.svg"
                            />
                        </div>
                        <div className="column">
                            <div className="border-4 border-dashed border-white rounded-[1rem] p-[1rem] my-[2rem]">
                                <div class="font-['Oxygen'] font-semibold text-[1.5rem] text-[#000000] mb-[1rem] text-center">
                                    Code for Good 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column">
                                        <div class="font-['Oxygen'] font-semibold text-[3rem] text-[#000000] mb-[0.5rem] text-center">
                                            264
                                        </div>
                                        <div class="font-['Oxygen'] font-normal text-[1.5rem] text-[#000000] mb-[0.5rem] text-center">
                                            Participants
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div class="font-['Oxygen'] font-semibold text-[3rem] text-[#000000] mb-[0.5rem] text-center">
                                            35
                                        </div>
                                        <div class="font-['Oxygen'] font-normal text-[1.5rem] text-[#000000] mb-[0.5rem] text-center">
                                            Hacks
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div class="font-['Oxygen'] font-semibold text-[3rem] text-[#000000] mb-[0.5rem] text-center">
                                            $3300
                                        </div>
                                        <div class="font-['Oxygen'] font-normal text-[1.5rem] text-[#000000] mb-[0.5rem] text-center">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-4 border-dashed border-white rounded-[1rem] p-[1rem] my-[2rem]">
                                <div class="font-['Oxygen'] font-semibold text-[1.5rem] text-[#000000] mb-[1rem] text-center">
                                    Ideate 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column">
                                        <div class="font-['Oxygen'] font-semibold text-[3rem] text-[#000000] mb-[0.5rem] text-center">
                                            234
                                        </div>
                                        <div className="font-['Oxygen'] font-normal text-[1.5rem] text-[#000000] mb-[0.5rem] text-center">
                                            Registrants
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="font-['Oxygen'] font-semibold text-[3rem] text-[#000000] mb-[0.5rem] text-center">
                                            18
                                        </div>
                                        <div className="font-['Oxygen'] font-normal text-[1.5rem] text-[#000000] mb-[0.5rem] text-center">
                                            Pitches
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="font-['Oxygen'] font-semibold text-[3rem] text-[#000000] mb-[0.5rem] text-center">
                                            $1500
                                        </div>
                                        <div className="font-['Oxygen'] font-normal text-[1.5rem] text-[#000000] mb-[0.5rem] text-center">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium" id="code-for-good">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div className="title">Feb 18 Speaker Event</div>
                            <div className="subtitle">
                                <p>
                                    We're excited to welcome Robert Vila, a Director @ IBM
                                    to speak about his experience in the technical and business requirements for successful SaaS.
                                    The event is <b>Feb 18, 2023 from 1-2pm in Wilkinson 136</b>.
                                    <br />
                                    <br />
                                    Chick-fil-A catering will be served and we hope to see you there!
                                </p>
                            </div>
                            <div
                                className="button"
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    // gtag('event', 'event_form_open')
                                    router.push("https://www.linkedin.com/feed/update/urn:li:activity:7032811883829051392");
                                }}>
                                See the event{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="column">
                            <img
                                className="events-image"
                                src="/images/RobertVilaTalk.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium" id="code-for-good">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div className="title">Code For Good</div>
                            <div className="subtitle">
                                Code for Good is the nation’s premier hackathon
                                for tech and social good. We unite students that
                                are passionate about changing the intention and
                                narrative behind how technology is used today to
                                create meaningful hacks in a 24-hour sprint. Our
                                goal is to facilitate an environment where
                                students can create meaningful technical
                                projects or learn the skills to get there.
                            </div>
                            <div
                                className="button"
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    router.push("https://2022.hackduke.org");
                                }}>
                                Code For Good 2022{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className="column">
                            <img
                                className="events-image"
                                src="/images/cfg-2022-3.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium" id="ideate">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <img
                                className="events-image"
                                id="events-s2-i2"
                                src="/images/ideate-2018-1.png"
                            />
                            <img
                                className="events-image"
                                id="events-s2-i3"
                                src="/images/ideate-2018-2.png"
                            />
                        </div>
                        <div className="column">
                            <div className="title">Ideate</div>
                            <div className="subtitle">
                                Ideate is a two-day conference filled with
                                awesome speakers and workshops to explore how
                                design and innovation interact. The designathon
                                aims to observe how design thinking can be
                                applied across fields, and is open to design
                                aficionados, curious newcomers, and everyone in
                                between!
                            </div>
                            <div
                                className="button"
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    router.push("https://ideate.hackduke.org");
                                }}>
                                Ideate 2022{" "}
                                <FontAwesomeIcon
                                    className="fa-md faicon"
                                    icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SponsorUs />
            <Footer />
        </>
    );
}
