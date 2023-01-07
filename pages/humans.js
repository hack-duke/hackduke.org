import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import MemberCard from "../components/MemberCard";
import React, {useState} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const members = require("../public/team.json");

export default function Humans() {
    const [team, setTeam] = useState(window.location && window.location.hash.slice(1) || "Tech");

    const switchTeams = (teamName) => {
        // switch (team) {
        //     case "design":
        //         return <CSSTransition key={team} timeout={0} classNames={"fade"}><div key="1">Design</div></CSSTransition>
        //     case "logistics":
        //         return <CSSTransition key={team} timeout={0} classNames={"fade"}><div key="2">Logistics</div></CSSTransition>
        //     case "outreach":
        //         return <CSSTransition key={team} timeout={0} classNames={"fade"}><div key="3">Outreach</div></CSSTransition>
        //     case "sponsorship":
        //         return <CSSTransition key={team} timeout={0} classNames={"fade"}><div key="4">Sponsorship</div></CSSTransition>
        //     default:
        //         return <CSSTransition key={team} timeout={0} classNames={"fade"}><div key="5">Tech</div></CSSTransition>
        // }
        let teamMembers = members.filter(m => m.Team === teamName);
        console.log(teamMembers);
        return (
            <>
                {
                    teamMembers.map(t => 
                    <MemberCard 
                        src={"/images/team-photos/"+t.First + t.Last+".jpg"}
                        name={t.First + " " + t.Last}
                        title={t.Title}
                        major={t.Major}
                    />)
                }
            </>
        )

    }
    return (
        <>
            <Navbar color="#242424" />
            <div className="humans">
                <section className="section is-medium" id="humans-hero">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div
                                className="column is-three-fifths-desktop"
                                id="humans-hero-c1">
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
                                id="humans-hero-c2">
                                <img
                                    src="/images/team-2023.jpeg"
                                    id="humans-hero-i1"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="humans-cards">
                    <div className="section-title">The humans behind it all</div>
                    <div className="level"></div>
                    <div className="card-list" id="directors">
                        {switchTeams("Director")}
                    </div>
                    <div id="teams-bar">
                        <div id={"tech"}></div><div id={"design"}></div><div id={"logistics"}></div><div id={"outreach"}></div><div id={"sponsorship"}></div>
                        <ul className={"teams-navbar"}>
                            <li className={team === "Tech"? "team-active" : ""} onClick={()=>setTeam("Tech")}>Tech</li>
                            <li className={team === "Design"? "team-active" : ""} onClick={()=>setTeam("Design")}>Design</li>
                            <li className={team === "Logistics"? "team-active" : ""} onClick={()=>setTeam("Logistics")}>Logistics</li>
                            <li className={team === "Outreach"? "team-active" : ""} onClick={()=>setTeam("Outreach")}>Outreach</li>
                            <li className={team === "Sponsorship"? "team-active" : ""} onClick={()=>setTeam("Sponsorship")}>Sponsorship</li>
                        </ul>
                    </div>
                    {console.log(switchTeams(team))}
                    <div className="card-list">{switchTeams(team)}</div>
                </section>
                <MemberCard src="/images/aditya.jpg" />
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
