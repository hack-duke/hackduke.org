import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import SponsorUs from "../components/SponsorUs";
import Image from "../components/Image";
import Gallery from "../components/Gallery";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";
import IconTextButton from "../components/IconTextButton";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Navbar color="#0042c6" />
            <div className="index">
                <div className="hero">
                    <HeroBackground />
                    <div className="logo">
                        <Image src="/images/hd-logo.svg" alt="Duke SVG" />
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
                                <IconTextButton
                                    text="Read our story"
                                    icon={
                                        <AiOutlineArrowRight
                                            size={28}
                                            className="pl-1"
                                        />
                                    }
                                    onClick={() => {
                                        router.push("/about");
                                    }}
                                />
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
                                <IconTextButton
                                    text="Meet our people"
                                    icon={
                                        <AiOutlineArrowRight
                                            size={28}
                                            className="pl-1"
                                        />
                                    }
                                    onClick={() => {
                                        router.push("/humans");
                                    }}
                                />
                            </div>
                            <div className="column">
                                <Image
                                    src="/images/team-2023.jpg"
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
                                    <Gallery
                                        src={[
                                            "/images/cfg-2023-1.jpg",
                                            "/images/cfg-2023-2.jpg",
                                            "/images/cfg-2023-3.jpg",
                                        ]}
                                        alt={[
                                            "Top WDWD",
                                            "Middle WDWD",
                                            "Bottom WDWD",
                                        ]}
                                    />
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
                                <IconTextButton
                                    text="See our work"
                                    icon={
                                        <AiOutlineArrowRight
                                            size={28}
                                            className="pl-1"
                                        />
                                    }
                                    onClick={() => {
                                        router.push("/events");
                                    }}
                                />
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
                                    Each year, our event brings in 
                                    participants to craft solutions for social
                                    impact in the environment, inequality,
                                    education, and health fields. We provide the
                                    educational resources, inspirational
                                    speakers, mentorship, and nonprofit donation
                                    prizes to let others realize and unlock
                                    tech’s potential for social impact.
                                </div>
                                <IconTextButton
                                    text="Join our team"
                                    icon={
                                        <AiOutlineArrowRight
                                            size={28}
                                            className="pl-1"
                                        />
                                    }
                                    onClick={() => {
                                        router.push("/join");
                                    }}
                                />
                            </div>
                            <div className="column">
                                <div
                                    className="columns is-multiline is-gapless"
                                    id="index-s5-i"
                                >
                                    <Gallery
                                        src={[
                                            "/images/cfg-2023-5.jpg",
                                            "/images/cfg-2023-4.jpg",
                                        ]}
                                        alt={[
                                            "Top Why Hackduke",
                                            "Bottom Why Hackduke",
                                        ]}
                                    />
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
