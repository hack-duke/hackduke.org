import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import SponsorUs from "../components/SponsorUs";
import Image from "../components/Image";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Navbar color="#0042c6" />
            <div className="index">
                <div className="hero">
                    <HeroBackground />
                    <div className="logo">
                        <Image
                            src="/images/hd-logo.svg"
                            alt="Duke SVG"
                        />
                    </div>
                </div>
                <section className="section is-small">
                    <div className="container">
                        <div className="columns is-desktop">
                            <div className="column" id="index-s1-c1">
                                <div className="subtitle">
                                    We are a tech organization that brings
                                    together a multidisciplinary community at
                                    Duke to further social good. Sound
                                    interesting?
                                </div>
                                <div
                                    className="button"
                                    style={{ color: "#0042c6" }}
                                    onClick={() => {
                                        router.push("/about");
                                    }}
                                >
                                    Read our story{" "}
                                    <AiOutlineArrowRight size={28} className="pl-1" />
                                </div>
                            </div>
                            <div className="column" id="index-s1-c2">
                                <Image
                                    src="/graphics/group1.svg"
                                    alt="Story SVG"
                                    extraClasses="w-[20rem]"
                                />
                            </div>
                        </div>
                        <div className="columns is-desktop" id="index-s2">
                            <div
                                className="column"
                                id="index-s2-c1"
                                style={{ borderColor: "#36c69b" }}
                            >
                                <Image
                                    src="/graphics/community.svg"
                                    alt="Community SVG"
                                    extraClasses="w-[10rem] h-[10rem] mt-[-1rem] mb-[1rem]"
                                />

                                <div className="card-title">Community</div>
                                <div className="card-text">
                                    We believe in fostering an internal,
                                    university, and local tech community that
                                    celebrates collaboration, diversity, and
                                    social impact.
                                </div>
                            </div>
                            <div
                                className="column"
                                id="index-s2-c2"
                                style={{ borderColor: "#f7af1d" }}
                            >
                                <Image
                                    src="/graphics/innovation.svg"
                                    alt="Innovation SVG"
                                    extraClasses="w-[10rem] h-[10rem] mt-[-1rem] mb-[1rem]"
                                />

                                <div className="card-title">Innovation</div>
                                <div className="card-text">
                                    With our diverse skillsets and interests, we
                                    create extraordinary things that inspire
                                    others to create something cool. Let’s
                                    build!
                                </div>
                            </div>
                            <div
                                className="column"
                                id="index-s3-c2"
                                style={{ borderColor: "#e55511" }}
                            >

                                <Image
                                    src="/graphics/social.svg"
                                    alt="Social Good SVG"
                                    extraClasses="w-[10rem] h-[10rem] mt-[-1rem] mb-[1rem]"
                                />

                                <div className="card-title">Social Good</div>
                                <div className="card-text">
                                    It’s not just about meaningful projects. We
                                    love to discuss, share, and bring to life
                                    ideas that aim to make a positive impact on
                                    social issues.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section is-medium">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div className="title">Who are we?</div>
                                <div className="subtitle">
                                    We are a diverse community of Duke students
                                    united by our love of building and using
                                    tech for social good. We are split into 6
                                    teams: Tech, Design, Logistics, Outreach,
                                    Sponsorship, and Marketing.
                                </div>
                                <div
                                    className="button"
                                    style={{ color: "#0042c6" }}
                                    onClick={() => {
                                        router.push("/humans");
                                    }}
                                >
                                    Meet our people{" "}
                                    <AiOutlineArrowRight size={28} className="pl-1" />
                                </div>
                            </div>
                            <div className="column">
                                <Image
                                    src="/images/team-2022.jpg"
                                    alt="Team 2022"
                                    extraClasses="rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section is-medium">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div
                                    className="columns is-multiline is-gapless"
                                    id="index-s4-i"
                                >
                                    <div className="column is-full">
                                        <Image
                                            src="/images/cfg-2022-9.jpeg"
                                            alt="Top WDWD"
                                            extraClasses="rounded-2xl w-[40%]"
                                        />
                                    </div>
                                    <div className="column is-full">
                                        <Image
                                            src="/images/cfg-2022-7.jpeg"
                                            alt="Middle WDWD"
                                            extraClasses="rounded-2xl w-[60%] ml-[20%]"
                                        />
                                    </div>
                                    <div className="column is-full">
                                        <Image
                                            src="/images/cfg-2022-1.jpeg"
                                            alt="Bottom WDWD"
                                            extraClasses="rounded-2xl w-[40%] ml-[60%]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="title">What do we do?</div>
                                <div className="subtitle">
                                    We organize Code for Good, the nation’s
                                    premier hackathon for social good. Our teams
                                    work together year-round to invite speakers,
                                    design resources, build platforms, and more
                                    to ensure the success of the event.
                                </div>
                                <div
                                    className="button"
                                    style={{ color: "#0042c6" }}
                                    onClick={() => {
                                        router.push("/events");
                                    }}
                                >
                                    See our work{" "}
                                    <AiOutlineArrowRight size={28} className="pl-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section is-medium">
                    <div className="container">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div className="title">Why HackDuke?</div>
                                <div className="subtitle">
                                    Each year, our event brings in over 1000
                                    participants to craft solutions for social
                                    impact in the environment, inequality,
                                    education, and health fields. We provide the
                                    educational resources, inspirational
                                    speakers, mentorship, and nonprofit donation
                                    prizes to let others realize and unlock
                                    tech’s potential for social impact.
                                </div>
                                <div
                                    className="button"
                                    style={{ color: "#0042c6" }}
                                    onClick={() => {
                                        router.push("/join");
                                    }}
                                >
                                    Join our team{" "}
                                    <AiOutlineArrowRight size={28} className="pl-1" />
                                </div>
                            </div>
                            <div className="column">
                                <div
                                    className="columns is-multiline is-gapless"
                                    id="index-s5-i"
                                >
                                    <div className="column is-full">
                                        <Image
                                            src="/images/cfg-2022-13.jpeg"
                                            alt="Top Why Hackduke"
                                            extraClasses="rounded-2xl w-[70%]"
                                        />
                                    </div>
                                    <div className="column is-full">
                                        <Image
                                            src="/images/cfg-2022-12.jpeg"
                                            alt="Bottom Why Hackduke"
                                            extraClasses="rounded-2xl w-[70%] ml-[30%]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <SponsorUs />
            <Footer />
        </>
    );
}
