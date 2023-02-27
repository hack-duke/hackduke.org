import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>About Us | HackDuke</title>
            </Head>
            <Navbar color="#e55511" />
            <div className="about">
                <section className="section is-medium" id="about-hero">
                    <div className="container">
                        <div className="section-title">Our Story</div>
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
                            style={{ color: "#ffffff" }}
                            onClick={() => {
                                router.push("/events");
                            }}
                        >
                            More about our events{" "}
                            <FontAwesomeIcon
                                className="fa-md faicon"
                                icon={faArrowRight}
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                </section>
                <section
                    className="section is-medium about-story"
                    id="about-us"
                >
                    <div className="container" id="about-s1">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column" id="about-story-1-c1">
                                <div className="section-title">
                                    "Do Something New"
                                </div>
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
                            <div className="column" id="about-story-1-c2">
                                <img
                                    src="/images/about-1.png"
                                    className="about-image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container" id="about-s2">
                        <img
                            src="/images/about-2.png"
                            className="about-image"
                            id="about-s2-i2"
                        />
                        <img
                            src="/images/about-3.png"
                            className="about-image"
                            id="about-s2-i3"
                        />
                    </div>
                    <div className="container" id="about-s3">
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
                            This [hackathon] has inspired more students to work
                            on problems that are related to social good. It has
                            also opened the eyes of more non-profits of the
                            potential of technology. HackDuke is not a solution
                            to society's problems. It's the beginning of the
                            journey in identifying them, and exploring the
                            solutions to them.
                        </div>
                        <div className="quote-author">
                            — Ashley Qian, 2014 HackDuke Co-director (DukeToday)
                        </div>
                    </div>
                    <div className="container" id="about-s4">
                        <img
                            src="/images/about-4.png"
                            className="about-image"
                            id="about-s4-i4"
                        />
                    </div>
                    <div className="container" id="about-s5">
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
                    <div className="container" id="about-s6">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column" id="about-s6-i">
                                <img
                                    src="/images/about-5.png"
                                    className="about-image"
                                    id="about-s6-i5"
                                />
                                <img
                                    src="/images/about-6.png"
                                    className="about-image"
                                    id="about-s6-i6"
                                />
                                <img
                                    src="/images/about-7.png"
                                    className="about-image"
                                    id="about-s6-i7"
                                />
                            </div>
                            <div className="column">
                                <div className="section-title">
                                    Hello, Ideate!
                                </div>
                                <div className="subtitle">
                                    From HackDuke Education, Ideate was founded
                                    by Dorothy Feng and Kiyoon Ko in Spring
                                    2016. The mission of the design thinking and
                                    innovation conference is to teach students
                                    the importance of design an evolving
                                    tech/business world and inspire them to
                                    incorporate design thinking as a tool in the
                                    problem-solving/innovation process. The
                                    conference has introduced so many students
                                    to the world of design, inspiring them to
                                    pursue design as a career (including this
                                    here author).
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="about-s7">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div className="section-title">
                                    Moving Virtual
                                </div>
                                <div className="subtitle">
                                    Of course, we can’t forget 2020. Despite
                                    being scattered across the globe, our
                                    planning teams were able to successfully
                                    organize our annual events online. In July
                                    2020, we hosted our first virtual Ideate,
                                    welcoming students from India, South Korea,
                                    Philippines, and Puerto Rico. (Durham who?
                                    jk we love our city). In December of the
                                    same year, we hosted yet another successful
                                    Code for Good hackathon.
                                </div>
                            </div>
                            <div className="column" id="about-s7-i">
                                <img
                                    src="/images/about-8.png"
                                    className="about-image"
                                    id="about-s7-i8"
                                />
                                <img
                                    src="/images/about-9.png"
                                    className="about-image"
                                    id="about-s7-i9"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container" id="about-s8">
                        <div className="section-title">What Now?</div>
                        <div className="subtitle">
                            So, that’s a brief history of HackDuke! We are so
                            proud of our organization and the growth that has
                            happened the past 8 years. From 100 participants
                            from RTP to over 1000 from across the globe,
                            HackDuke’s impact has tremendously increased. As an
                            organization, we want to continue our growth, to
                            stay true to our core values of community through
                            education and innovation for social good, and, of
                            course, to have fun through it all.
                        </div>
                        <div className="subtitle">
                            We can’t wait to see where we go! Come along for the
                            journey—you won’t regret it.
                        </div>
                    </div>
                    <div className="container" id="about-s4">
                        <img
                            src="/images/team-2023.jpeg"
                            className="about-image"
                            id="about-s4-i4"
                        />
                    </div>
                </section>
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
