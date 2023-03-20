import Navbar from "../../components/Navbar";
import SponsorUs from "../../components/SponsorUs";
import Footer from "../../components/Footer";
import Head from "next/head";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";

export default function Events() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Events | HackDuke</title>
            </Head>
            <Navbar color="#36c69b" />
            <section className="section is-small min-h-screen bg-[#36c69b] pt-40">
                <div className="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column font-sans text-black">
                            <div className="mb-8 text-[3rem] font-semibold">
                                Events
                            </div>
                            <div className="mb-2 text-[1.25rem] leading-tight">
                                Each year, our teams organize two conferences
                                that attract participants all over the country:
                                Code for Good and Ideate. You might have heard
                                about them :)
                            </div>
                            <img
                                className="mt-[10%] ml-[10%] w-4/5"
                                src="/graphics/building.svg"
                            />
                        </div>
                        <div className="column">
                            <div className="my-[2rem] rounded-[1rem] border-4 border-dashed border-white p-[1rem] text-center font-sans text-black">
                                <div className="mb-[1rem] text-[1.5rem] font-semibold">
                                    Code for Good 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            264
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            Participants
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            35
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            Hacks
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            $3300
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-[2rem] rounded-[1rem] border-4 border-dashed border-white p-[1rem] text-center font-sans text-black">
                                <div className="mb-[1rem] text-[1.5rem] font-semibold">
                                    Ideate 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            234
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            Registrants
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            18
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            Pitches
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            $1500
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column font-sans">
                            <div className="mb-[0.5rem] text-[2rem] font-normal text-[#0042c6]">
                                Feb 18 Speaker Event
                            </div>
                            <div className="mb-2 text-[1.25rem] leading-tight text-black">
                                <p>
                                    We&apos;re excited to welcome Robert Vila, a
                                    Director @ IBM to speak about his experience
                                    in the technical and business requirements
                                    for successful SaaS. The event is{" "}
                                    <b>
                                        Feb 18, 2023 from 1-2pm in Wilkinson 136
                                    </b>
                                    .
                                    <br />
                                    <br />
                                    Chick-fil-A catering will be served and we
                                    hope to see you there!
                                </p>
                            </div>
                            <div
                                className="button relative ml-0 mr-auto border-transparent bg-transparent p-0 text-[1.25rem] before:absolute before:bottom-[4px] before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:rounded-[4px] before:bg-[#0042c6] before:duration-300 before:ease-in-out	before:content-[''] hover:border-transparent hover:bg-transparent hover:before:origin-left hover:before:scale-x-100"
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    // gtag('event', 'event_form_open')
                                    router.push(
                                        "https://www.linkedin.com/feed/update/urn:li:activity:7032811883829051392"
                                    );
                                }}
                            >
                                See the event{" "}
                                <AiOutlineArrowRight
                                    size={28}
                                    className="pl-1"
                                />
                            </div>
                        </div>
                        <div className="column">
                            <img
                                className="rounded-2xl"
                                src="/images/RobertVilaTalk.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column font-sans">
                            <div className="mb-[0.5rem] text-[2rem] font-normal text-[#0042c6]">
                                Code For Good
                            </div>
                            <div className="mb-2 text-[1.25rem] leading-tight text-black">
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
                                className="button relative ml-0 mr-auto border-transparent bg-transparent p-0 text-[1.25rem] before:absolute before:bottom-[4px] before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:rounded-[4px] before:bg-[#0042c6] before:duration-300 before:ease-in-out	before:content-[''] hover:border-transparent hover:bg-transparent hover:before:origin-left hover:before:scale-x-100"
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    router.push("https://2022.hackduke.org");
                                }}
                            >
                                Code For Good 2022{" "}
                                <AiOutlineArrowRight
                                    size={28}
                                    className="pl-1"
                                />
                            </div>
                        </div>
                        <div className="column">
                            <img
                                className="rounded-2xl"
                                src="/images/cfg-2022-3.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="section is-medium">
                <div className="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <img
                                className="rounded-2xl w-[70%]"
                                src="/images/ideate-2018-1.png"
                            />
                            <img
                                className="rounded-2xl w-[70%] ml-[30%]"
                                src="/images/ideate-2018-2.png"
                            />
                        </div>
                        <div className="font-sans column">
                            <div className="font-normal text-[2rem] text-[#0042c6] mb-[0.5rem]">Ideate</div>
                            <div className="text-black text-[1.25rem] mb-2 leading-tight">
                                Ideate is a two-day conference filled with
                                awesome speakers and workshops to explore how
                                design and innovation interact. The designathon
                                aims to observe how design thinking can be
                                applied across fields, and is open to design
                                aficionados, curious newcomers, and everyone in
                                between!
                            </div>
                            <div
                                className="button text-[1.25rem] border-transparent bg-transparent relative p-0 ml-0 mr-auto hover:border-transparent hover:bg-transparent before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-[4px] before:bg-[#0042c6] before:bottom-[4px] before:left-0 before:origin-right	before:scale-x-0 before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100"
                                style={{ color: "#0042c6" }}
                                onClick={() => {
                                    router.push("https://ideate.hackduke.org");
                                }}
                            >
                                Ideate 2022{" "}
                                <AiOutlineArrowRight size={28} className="pl-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <SponsorUs />
            <Footer />
        </>
    );
}
