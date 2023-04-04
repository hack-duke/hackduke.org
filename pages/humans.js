import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import TeamCards from "../components/TeamCards";
import React, { useState } from "react";
import Head from "next/head";
import Image from "../components/Image";

export default function Humans() {
    const [team, setTeam] = useState("Tech");
    const teams = {
        Tech: "Magicians, Sorcerers, Wizards. Coding is like magic, no doubt, no doubt, no doubt.",
        Design: "More than just making things look pretty! But we do enjoy a good deal of pixel-pushing...",
        Logistics:
            "We make everything run smoothly. Oh, you need something? Don’t worry, consider it done.",
        Outreach:
            "We get to talk to the celebrities (the speakers) and get them to campus/zoom.",
        Sponsorship: "Making money moves. Need I say more?",
        Marketing: "Spreading innovation throughout the community.",
        Treasury: "Making the dollars make cents.",
    };

    return (
        <>
            <Head>
                <title>Humans | HackDuke</title>
            </Head>
            <Navbar color="#242424" />
            <div>
                <section
                    className="section is-medium flex min-h-screen items-center justify-center bg-[#242424] bg-[url('/graphics/humans.svg')] bg-no-repeat"
                    id="humans-hero">
                    <div className="container pl-[5vw] pr-[5vw]">
                        <div className="columns is-desktop is-vcentered">
                            <div
                                className="column is-three-fifths-desktop pr-[0vw] lg:pr-[5vw]"
                                // id="humans-hero-c1"
                            >
                                <div className="section-title mb-8 font-sans text-[3rem] font-semibold text-white">
                                    Hey!
                                </div>
                                <div
                                    className="subtitle mb-2 font-sans text-[1.25rem]"
                                    style={{ color: "white" }}>
                                    {/* the style is needed because .container.subtitle is more specific than any class I add */}
                                    We are a group of Duke students who work
                                    together to bring to life Code for Good and
                                    Ideate. Although we all have different
                                    interests and backgrounds, we value our
                                    community and are united by our passions in
                                    building something cool. We are split into 6
                                    teams (Tech, Design, Logistics, Outreach,
                                    Sponsorship, Marketing) and are lead by our
                                    two amazing co-directors!
                                </div>
                            </div>
                            <div
                                className="column is-two-fifths-desktop mt-20"
                                // id="humans-hero-c2"
                            >

                                <Image
                                    src="/images/team-2023.jpeg"
                                    alt="team-2023"
                                    extraClasses="w-full rounded-2xl"
                                />

                            </div>
                        </div>
                    </div>
                </section>
                <section className="section is-medium" id="humans-cards">
                    <div className="container">
                        <div className="title mb-8 font-sans text-[1.25rem] text-black">
                            The humans behind it all
                        </div>
                        <div
                        // className="humans-directors" id="Directors"
                        >
                            <TeamCards team="Director" />
                        </div>
                        <div
                            // className="humans-teams"
                            id={team}>
                            <div className="team-selector mt-12 mb-4">
                                {Object.keys(teams).map((t) => (
                                    <div
                                        className={
                                            "button mr-4 last:mr-0 hover:cursor-pointer" +
                                            (team === t
                                                ? "selected text-[#0042c6] before:origin-left before:scale-x-100"
                                                : "")
                                        }
                                        style={{ fontSize: "1.5rem" }}
                                        // style is needed because globals.css still has the button css overriding
                                        onClick={() => setTeam(t)}
                                        key={t}>
                                        {t}
                                    </div>
                                ))}
                            </div>
                            <div className="mb-8 text-[1rem]">
                                &quot;{teams[team]}&quot;
                            </div>
                            <TeamCards team={team} />
                        </div>
                    </div>
                </section>
                <section className="section" id="next-chapters">
                    <div className="container pl-[5vw] pr-[5vw]">
                        <div className="title mb-8 font-sans text-3xl font-normal text-[#0042c6]">
                            The next chapters
                        </div>
                        <div className="subtitle mb-2 font-sans text-[1.25rem] text-black">
                            Part of our goal as an organization is to provide
                            our members with mentorship, learning, and
                            opportunities to make real impact. This desire to
                            grow and help others doesn’t leave us after
                            Hackduke. We are proud to have our family go on to
                            do amazing things at great companies like the ones
                            below!{" "}
                        </div>

                        <Image
                            src="/graphics/sponsor-icons.png"
                            alt="sponsors"
                            extraClasses="mt-8"
                        />

                    </div>
                </section>
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
