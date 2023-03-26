import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "../components/Image";
import Gallery from "../components/Gallery";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>About Us | HackDuke</title>
            </Head>
            <Navbar color="#e55511" />
            <div>
                {/* section-is-medium, about-hero */}
                <section
                    className="section is-medium flex min-h-screen items-center 
                justify-center bg-hd-orange bg-[url('/graphics/about.svg')] bg-[left_calc(50%)_top_calc(90%)] bg-no-repeat 
                pt-40 font-sans"
                >
                    <div className="pl-[5vw] pr-[40vw] lg:px-[5vw]">
                        <div className="mb-8 text-5xl font-semibold text-white">
                            Our Story
                        </div>
                        <div className="mb-2 text-xl font-normal leading-tight text-white">
                            HackDuke brings together Duke students with the goal
                            of improving meaningful student engagement with the
                            intersection of tech, design, and social good.
                        </div>
                        <div className="mb-2 text-xl font-normal leading-tight text-white">
                            Through our annual hackathon and designathon, we
                            unite students across the globe and encourage them
                            to think critically about the role of technology in
                            our communities. Within our Duke/Durham community,
                            we host workshops to promote education for all and
                            partner with local nonprofits to connect and give
                            back.
                        </div>
                        <div
                            className="button relative mx-auto ml-0 bg-white p-0 text-xl"
                            id="about-hero-button"
                            style={{ color: "#ffffff" }}
                            onClick={() => {
                                router.push("/events");
                            }}
                        >
                            More about our events{" "}
                            <AiOutlineArrowRight size={28} className="pl-1" />
                        </div>
                    </div>
                </section>
                <section className="section is-medium font-sans">
                    <div className="px-[5vw]">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div
                                    className="mb-3 text-[2rem]
                        font-normal text-hd-dark-blue"
                                >
                                    &quot;Do Something New&quot;
                                </div>
                                <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                                    It was 2013, and it started out as HackBlue.
                                    A group of 3 Duke and UNC students—Dennis
                                    Li, Yang Su, and Katie Hawthorne—organized
                                    the first hackathon at Duke to get people
                                    excited about learning and creating things
                                    outside the classroom.
                                </div>
                                <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
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
                            <div className="column">

                                <Image
                                    src="/images/about-1.png"
                                    alt="HackDuke Example"
                                    extraClasses="rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 mb-20 pl-[20vw] pr-[15vw] lg:my-4 lg:px-[5vw]">
                        <Image
                            src="/images/about-2.png"
                            alt="HackDuke Example"
                            extraClasses="w-[80%] rounded-2xl"
                        />

                        <Image
                            src="/images/about-3.png"
                            alt="HackDuke Example"
                            extraClasses="mt-[-20%] ml-[40%] w-[60%] rounded-2xl"
                        />
                    </div>
                    <div className="px-[15vw] lg:px-[5vw]">
                        <div
                            className="mb-3 text-[2rem]
                        font-normal text-hd-dark-blue"
                        >
                            For Social Good
                        </div>
                        <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                            In 2014, we introduced the core concept of hacking
                            for social good. Local non-profits like the
                            Community Empowerment Fund and Durham Cares
                            participated as experts to lead discussions and help
                            teams identify community problems and develop
                            meaningful solutions.
                        </div>
                        <div
                            className="mt-4 text-base font-normal 
            text-hd-dark-blue before:mr-2 before:font-semibold before:content-['“'] after:ml-2 
            after:font-semibold after:content-['”'] "
                        >
                            This [hackathon] has inspired more students to work
                            on problems that are related to social good. It has
                            also opened the eyes of more non-profits of the
                            potential of technology. HackDuke is not a solution
                            to society&apos;s problems. It&apos;s the beginning of the
                            journey in identifying them, and exploring the
                            solutions to them.
                        </div>
                        <div className="mt-2 text-right text-base font-normal text-hd-dark-blue">
                            — Ashley Qian, 2014 HackDuke Co-director (DukeToday)
                        </div>
                    </div>
                    <div className="my-12 px-[20vw] lg:my-4 lg:px-[5vw]">
                        <Image
                            src="/images/about-4.png"
                            alt="HackDuke Example"
                            extraClasses="rounded-2xl lg:w-full"
                        />
                    </div>
                    <div className="px-[15vw] lg:px-[5vw]">
                        <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                            As the hackathon expanded, we continued to engage
                            with the Duke community through new initiatives like
                            HackDuke Education, where we brought speakers in
                            tech and social justice, educational workshops,
                            career panels, and more to the Duke community. By
                            2016, we no longer just hosted hackathons. HackDuke
                            became an umbrella organization for multiple
                            projects: Code for Good (the OG hackathon), Catalyst
                            (social/pre-professional tech org), and more. We
                            became the face of Duke&apos;s tech community,
                            responsible for engaging, educating, and inspiring
                            students with both technical and non-technical
                            backgrounds.
                        </div>
                    </div>
                    <div className="my-12 px-[5vw] lg:mb-4 lg:px-[5vw]">
                        <div className="columns is-desktop is-vcentered">

                            

                            <div className="column">
                                <Gallery
                                    imageNames={["/images/about-5.png", "/images/about-6.png", "/images/about-7.png"]}
                                    altTexts={["HackDuke Example", "HackDuke Example", "HackDuke Example"]}
                                />
                            </div>
                            <div className="column">
                                <div
                                    className="mb-3 text-[2rem]
                        font-normal text-hd-dark-blue"
                                >
                                    Hello, Ideate!
                                </div>
                                <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
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
                    <div className="mb-12 px-[5vw]">
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div
                                    className="mb-3 text-[2rem]
                        font-normal text-hd-dark-blue"
                                >
                                    Moving Virtual
                                </div>
                                <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                                    Of course, we can&apos;t forget 2020. Despite
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
                            <div className="column">
                                <Gallery
                                    imageNames={["/images/about-8.png", "/images/about-9.png"]}
                                    altTexts={["HackDuke Example", "HackDuke Example"]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-[15vw] lg:px-[5vw]">
                        <div
                            className="mb-3 text-[2rem]
                        font-normal text-hd-dark-blue"
                        >
                            What Now?
                        </div>
                        <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                            So, that&apos;s a brief history of HackDuke! We are so
                            proud of our organization and the growth that has
                            happened the past 8 years. From 100 participants
                            from RTP to over 1000 from across the globe,
                            HackDuke&apos;s impact has tremendously increased. As an
                            organization, we want to continue our growth, to
                            stay true to our core values of community through
                            education and innovation for social good, and, of
                            course, to have fun through it all.
                        </div>
                        <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                            We can&apos;t wait to see where we go! Come along for the
                            journey—you won&apos;t regret it.
                        </div>
                    </div>
                    <div className="my-12 px-[20vw] lg:my-4 lg:px-[5vw]">
                        <Image
                            src="/images/team-2023.jpeg"
                            alt="HackDuke Team"
                            extraClasses="ml-[10%] w-[80%] rounded-2xl lg:ml-0 lg:w-full"
                        />
                    </div>
                </section>
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
