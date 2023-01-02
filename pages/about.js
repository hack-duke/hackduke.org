import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about">
                <section className="section is-medium" id="about-hero">
                    <div className="container">
                        <div className="section-title">Mission</div>
                        <div className="subtitle">
                            HackDuke brings together Duke students with the goal
                            of improving meaningful student engagement with the
                            intersection of tech, design, and social good.
                        </div>
                        <div className="subtitle">
                            Through our annual hackathon and designathon, we
                            unite students across the globe and encourage them
                            to think critically about the role of technology in
                            our communities. Within our Duke/Durham community,
                            we host workshops to promote education for all and
                            partner with local nonprofits to connect and give
                            back.
                        </div>
                        <div
                            className="button"
                            id="about-hero-button"
                            style={{ color: "#ffffff" }}>
                            More about our events{" "}
                            <FontAwesomeIcon
                                className="fa-md faicon"
                                icon={faArrowRight}></FontAwesomeIcon>
                        </div>
                    </div>
                </section>
                <section className="section is-medium about-story">
                    <div className="container" id="about-story-1">
                        <div className="columns is-desktop">
                            <div className="column" id="about-story-1-c1">
                                <div className="section-title">Our Story</div>
                                <div className="subtitle">
                                    It was 2013, and it started out as HackBlue.
                                    A group of 3 Duke and UNC students—Dennis
                                    Li, Yang Su, and Katie Hawthorne—organized
                                    the first hackathon at Duke to get people
                                    excited about learning and creating things
                                    outside the classroom.
                                </div>
                                <div className="subtitle">
                                    The vision? Create the first university
                                    hackathon experience in the RTP area in
                                    providing a unique learning experience where
                                    like-minded and driven students come
                                    together and create interesting hacks in 24
                                    hours. The event attracted ~100 students.
                                    Later that year, our organization was
                                    renamed to HackDuke and continued to grow.
                                </div>
                            </div>
                            <div className="column" id="about-story-1-c2"></div>
                        </div>
                        <div className="img"></div>
                    </div>
                    <div className="container" id="about-story-2">
                        <div className="section-title">For Social Good</div>
                        <div className="subtitle">
                            In 2014, we introduced the core concept of hacking
                            for social good. Local non-profits like the
                            Community Empowerment Fund and Durham Cares
                            participated as experts to lead discussions and help
                            teams identify community problems and develop
                            meaningful solutions.
                        </div>
                        <div className="quote">
                            “This [hackathon] has inspired more students to work
                            on problems that are related to social good. It has
                            also opened the eyes of more non-profits of the
                            potential of technology. HackDuke is not a solution
                            to society's problems. It's the beginning of the
                            journey in identifying them, and exploring the
                            solutions to them.” — Ashley Qian, 2014 HackDuke
                            co-director (DukeToday)
                        </div>
                        <div className="img"></div>
                        <div className="subtitle">
                            As the hackathon expanded, we continued to engage
                            with the Duke community through new initiatives like
                            HackDuke Education, where we brought speakers in
                            tech and social justice, educational workshops,
                            career panels, and more to the Duke community. By
                            2016, we no longer just hosted hackathons. HackDuke
                            became an umbrella organization for multiple
                            projects: Code for Good (the OG hackathon), Catalyst
                            (social/pre-professional tech org), and more. We
                            became the face of Duke’s tech community,
                            responsible for engaging, educating, and inspiring
                            students with both technical and non-technical
                            backgrounds.
                        </div>
                    </div>
                </section>
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
