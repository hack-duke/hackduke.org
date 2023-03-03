import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import TeamCards from "../components/TeamCards";
import React, { useState } from "react";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
            <div className="humans">
                <section className="section is-medium" id="humans-hero">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div
                                className="column is-three-fifths-desktop"
                                id="humans-hero-c1"
                            >
                                <div className="section-title">Hey!</div>
                                <div className="subtitle">
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
                                className="column is-two-fifths-desktop"
                                id="humans-hero-c2"
                            >
                                <img
                                    src="/images/team-2023.jpeg"
                                    id="humans-hero-i1"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section is-medium" id="humans-cards">
                    <div className="container">
                        <div className="title">The humans behind it all</div>
                        <div className="humans-directors" id="Directors">
                            <TeamCards team="Director" />
                        </div>
                        <div className="humans-teams" id={team}>
                            <div className="team-selector">
                                {Object.keys(teams).map((t) => (
                                    <div
                                        className={
                                            team === t
                                                ? "button selected"
                                                : "button"
                                        }
                                        onClick={() => setTeam(t)}
                                        key={t}
                                    >
                                        {t}
                                    </div>
                                ))}
                            </div>
                            <div className="team-message">
                                &quot;{teams[team]}&quot;
                            </div>
                            <TeamCards team={team} />
                        </div>
                    </div>
                </section>
                <section className="section" id="next-chapters">
                    <div className="container">
                        <div className="title">The next chapters</div>
                        <div className="subtitle">
                            Part of our goal as an organization is to provide
                            our members with mentorship, learning, and
                            opportunities to make real impact. This desire to
                            grow and help others doesn’t leave us after
                            Hackduke. We are proud to have our family go on to
                            do amazing things at great companies like the ones
                            below!{" "}
                        </div>
                        <img
                            className={"sponsor-icons"}
                            src="/graphics/sponsor-icons.png"
                            alt={"sponsors"}
                        />
                    </div>
                </section>
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
