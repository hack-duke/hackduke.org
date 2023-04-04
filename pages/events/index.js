import Navbar from "../../components/Navbar";
import Sponsors from "../../components/Sponsors";
import SponsorUs from "../../components/SponsorUs";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "../../components/Image";
import Gallery from "../../components/Gallery";
import IconTextButton from "../../components/IconTextButton";

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
            <section className="section is-small" id="events-hero">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div className="section-title">Events</div>
                            <div className="subtitle">
                                Each year, our teams organize two conferences
                                that attract participants all over the country:
                                Code for Good and Ideate. You might have heard
                                about them :)
                            </div>

                            <Image
                                src="/graphics/building.svg"
                                alt="building"
                                extraClasses="w-[80%] mt-[10%] ml-[10%]"
                            />
                        </div>
                        <div className="column">
                            <div className="scoreboard">
                                <div className="scoreboard-title">
                                    Code for Good 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            264
                                        </div>
                                        <div className="scoreboard-text">
                                            Participants
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            35
                                        </div>
                                        <div className="scoreboard-text">
                                            Hacks
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            $3300
                                        </div>
                                        <div className="scoreboard-text">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scoreboard">
                                <div className="scoreboard-title">
                                    Ideate 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            234
                                        </div>
                                        <div className="scoreboard-text">
                                            Registrants
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            18
                                        </div>
                                        <div className="scoreboard-text">
                                            Pitches
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="scoreboard-number">
                                            $1500
                                        </div>
                                        <div className="scoreboard-text">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium" id="feb18">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <div className="title">Feb 18 Speaker Event</div>
                            <div className="subtitle">
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
                            <IconTextButton
                                text="See the event "
                                onClick={() => {
                                    router.push("https://www.linkedin.com/feed/update/urn:li:activity:7032811883829051392");
                                }}
                                icon={
                                    <AiOutlineArrowRight size={28} className="pl-1" />
                                }
                            />
                        </div>
                        <div className="column">
                            <Image
                                src="/images/RobertVilaTalk.jpeg"
                                alt="Robert Vila"
                                extraClasses="rounded-2xl"
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

                            <IconTextButton
                                text="Code For Good 2022 "
                                onClick={() => {
                                    router.push("https://2022.hackduke.org");
                                }}
                                icon={
                                    <AiOutlineArrowRight size={28} className="pl-1" />
                                }
                            />
                        </div>
                        <div className="column">
                            <Image
                                src="/images/cfg-2022-3.jpeg"
                                alt="Code For Good 2022"
                                extraClasses="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium" id="ideate">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <Gallery
                                src={[
                                    "/images/ideate-2018-1.png",
                                    "/images/ideate-2018-2.png",
                                ]}
                                alt={["Ideate 2018", "Ideate 2018"]}
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

                            <IconTextButton
                                text="Ideate 2022 "
                                onClick={() => {
                                    router.push("https://ideate.hackduke.org");
                                }}
                                icon={
                                    <AiOutlineArrowRight size={28} className="pl-1" />
                                }
                            />

                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="container">
                    <div className="title">Past Sponsors</div>
                    <Sponsors />
                </div>
            </section>

            <SponsorUs />
            <Footer />
        </>
    );
}
