import Navbar from "../components/Navbar";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "../components/Image";
import Gallery from "../components/Gallery";
import IconTextButton from "../components/IconTextButton";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

// Reports when an element first scrolls into view. Content counts as visible
// immediately (and `animate` is false) if the browser lacks
// IntersectionObserver or the visitor has asked for reduced motion.
function useInView() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const el = ref.current;
        const reduceMotion =
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!el || reduceMotion || !("IntersectionObserver" in window)) {
            setAnimate(false);
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return { ref, visible, animate };
}

// Fades and slides photos into place the first time they scroll into view.
function FadeIn({ children, delay = 0 }) {
    const { ref, visible, animate } = useInView();

    const style = animate
        ? {
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(16px)",
              transition: `opacity 1.1s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms, transform 1.3s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          }
        : undefined;

    return (
        <div ref={ref} style={style}>
            {children}
        </div>
    );
}

// Brand colors (match tailwind.config.js and the shapes in /public/graphics).
const ORANGE = "#E55511";
const YELLOW = "#F7AF1C";
const GREEN = "#35C69B";
const BLUE = "#0042C6";

// Site's decorative shapes (from /public/graphics), with the white accent
// strokes recolored so they read on the white background, as in JoinUs.
const SHAPES = {
    sparkBlob: {
        viewBox: "0 0 432 429",
        draw: (c = BLUE) => (
            <>
                <path d="M159.185 40.5497C113.65 26.3598 72.3933 113.112 57.457 158.261C47.6237 187.479 57.4569 274.5 17.9573 293.5C-34.2481 318.612 39.4572 429 85.4572 429C131.457 429 139.653 378 175.457 367.5C211.261 357 269.5 389.5 295.5 380.5C319.648 372.141 333.98 320.558 366.275 316.688C406.644 311.85 421.176 272.748 379.193 251.785C337.21 230.823 374.349 213.086 325.907 200.186C277.465 187.286 258.088 219.536 211.261 213.086C164.433 206.636 216.105 58.287 159.185 40.5497Z" fill={GREEN} />
                <path d="M238.91 29.4889L206.242 48.3499M244.6 69.9695H206.6M205.861 2L187 34.6682" stroke={c} strokeWidth="3" strokeLinecap="round" />
                <path d="M357.007 230.738C396.934 180.283 419.069 139.748 409.429 130.823C396.41 118.771 330.372 168.932 261.928 242.862C193.485 316.792 148.554 386.494 161.572 398.547C172 408.201 217.933 376.545 225.626 368.757" stroke={c} strokeWidth="3" strokeLinecap="round" />
            </>
        ),
    },
    oval: {
        viewBox: "0 0 220 149",
        draw: (c = YELLOW) => (
            <path d="M153.943 4.35636C135.377 -2.50319 80.8898 -6.13472 29.2278 32.198C-22.4341 70.5308 1.37879 105.232 46.583 129.442C91.7872 153.652 177.756 164.95 211.255 105.232C244.755 45.5136 172.509 11.2159 153.943 4.35636Z" fill={c} />
        ),
    },
    pebble: {
        viewBox: "0 0 59 62",
        draw: (c = ORANGE) => (
            <path d="M18.0329 2.10165C22.9276 -0.70662 37.2924 -2.19335 50.9123 13.4999C64.5323 29.1932 58.2544 43.3997 46.3369 53.3113C34.4194 63.2228 11.7549 67.8482 2.92323 43.3997C-5.90847 18.9513 13.1382 4.90992 18.0329 2.10165Z" fill={c} />
        ),
    },
    blobSmall: {
        viewBox: "0 0 102 79",
        draw: (c = GREEN) => (
            <path d="M4.44925 25.3909C10.7643 9.5228 62.0283 2.06389 86.8709 0.317944C91.7849 1.24227 101.515 5.82351 101.124 16.7538C100.636 30.4167 97.5916 42.9111 74.6264 65.4131C51.6612 87.9152 35.8631 76.0029 17.7707 72.5997C-0.321686 69.1965 -3.44456 45.2259 4.44925 25.3909Z" fill={c} />
        ),
    },
    hexagon: {
        viewBox: "0 0 167 130",
        draw: (c = ORANGE) => (
            <>
                <path d="M63.9032 10.2717L3.22098 87.0016C1.2619 89.4788 0.943541 92.8767 2.40837 95.6747L10.824 111.749C12.0678 114.125 14.4192 115.72 17.0866 115.996L145.266 129.283C149.233 129.694 152.897 127.12 153.856 123.248L164.497 80.2628C164.827 78.932 164.809 77.5388 164.445 76.2169L153.356 35.9387C152.627 33.2897 150.589 31.2003 147.959 30.4048L72.4944 7.57687C69.349 6.6254 65.9417 7.69419 63.9032 10.2717Z" fill={c} />
                <path d="M70 2L151.107 26.1695C153.741 26.9543 155.788 29.0362 156.527 31.6831L165 62" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
            </>
        ),
    },
    dashedCircle: {
        viewBox: "0 0 38 39",
        draw: (c = BLUE) => (
            <circle cx="19" cy="19.5" r="17.5" stroke={c} strokeWidth="3" strokeLinejoin="round" strokeDasharray="10 5" />
        ),
    },
    asterisk: {
        viewBox: "0 0 44 44",
        draw: (c = BLUE) => (
            <path d="M22 2V42M2 22H42M7.85785 7.85785L36.1421 36.1421M36.1421 7.85785L7.85783 36.1421" stroke={c} strokeWidth="3" strokeLinecap="round" />
        ),
    },
};

// A decorative shape placed in the empty space behind a block. It pops in when
// scrolled to, then floats gently. Hidden below 1200px wide, where the
// content already fills the width and shapes would collide with text. The parent must
// be `relative isolate` so the shape sits behind the content.
function Deco({ shape, color, pos, width, rotate = 0, float = 1, delay = 0 }) {
    const { ref, visible, animate } = useInView();
    const s = SHAPES[shape];
    const pop = animate
        ? {
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "scale(0.85)",
              transition: `opacity 1.1s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay + 200}ms, transform 1.3s cubic-bezier(0.16, 1, 0.3, 1) ${delay + 200}ms`,
          }
        : undefined;

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="about-deco pointer-events-none absolute -z-10 select-none"
            style={{ ...pos, width, transform: `rotate(${rotate}deg)` }}
        >
            <div style={pop}>
                <svg
                    viewBox={s.viewBox}
                    fill="none"
                    className={`about-float about-float-${float}`}
                    style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                        animationDelay: `${-delay * 3}ms`,
                    }}
                >
                    {s.draw(color)}
                </svg>
            </div>
        </div>
    );
}

export default function About() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>About Us | HackDuke</title>
            </Head>
            <Navbar color="#e55511" />
            <div className="about-page overflow-x-clip">
                <style jsx global>{`
                    @keyframes about-float-1 {
                        0%, 100% { transform: translateY(0) rotate(0deg); }
                        50% { transform: translateY(-12px) rotate(4deg); }
                    }
                    @keyframes about-float-2 {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        50% { transform: translate(6px, -8px) rotate(-6deg); }
                    }
                    @keyframes about-float-3 {
                        0%, 100% { transform: translateY(0) rotate(0deg); }
                        50% { transform: translateY(10px) rotate(3deg); }
                    }
                    .about-float-1 { animation: about-float-1 7s ease-in-out infinite; }
                    .about-float-2 { animation: about-float-2 9s ease-in-out infinite; }
                    .about-float-3 { animation: about-float-3 11s ease-in-out infinite; }
                    @media (max-width: 1199px) {
                        .about-deco { display: none; }
                    }
                    .about-page img.rounded-2xl {
                        transition: box-shadow 0.45s ease;
                    }
                    @media (hover: hover) {
                        .about-page img.rounded-2xl:hover {
                            box-shadow: 0 22px 40px -20px rgba(0, 66, 198, 0.45);
                        }
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .about-float { animation: none; }
                        .about-page img.rounded-2xl { transition: none; }
                    }
                `}</style>
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
                            our communities. 
                        </div>
                        <IconTextButton
                            text="More about our events"
                            textColorHex={"#ffffff"}
                            bgColorHex={"#ffffff"}
                            extraClasses={[
                                "before:bg-white",
                                "relative mx-auto",
                                "ml-0",
                            ]}
                            onClick={() => {
                                router.push("/events");
                            }}
                            icon={
                                <AiOutlineArrowRight
                                    size={28}
                                    className="pl-1"
                                />
                            }
                        />
                    </div>
                </section>
                <section className="section is-medium font-sans">
                    <div className="mb-10 px-[5vw] lg:mb-6">
                        <FadeIn>
                            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-hd-orange">
                                Since 2013
                            </div>
                            <h2 className="mt-2 text-5xl font-semibold text-hd-dark-blue lg:text-4xl">
                                Where We Came From
                            </h2>
                        </FadeIn>
                    </div>
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
                                <FadeIn>
                                    <Image
                                        src="/images/about-1.png"
                                        alt="HackDuke Example"
                                        extraClasses="rounded-2xl"
                                    />
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                    <div className="relative isolate mt-12 mb-20 pl-[20vw] pr-[15vw] lg:my-4 lg:px-[5vw]">
                        <Deco shape="oval" pos={{ right: "3%", top: "4%" }} width={170} rotate={-12} float={1} />
                        <Deco shape="dashedCircle" pos={{ right: "17%", top: "0%" }} width={38} float={2} delay={150} />
                        <Deco shape="blobSmall" pos={{ left: "4%", top: "38%" }} width={110} rotate={20} float={3} delay={100} />
                        <FadeIn>
                            <Image
                                src="/images/about-2.png"
                                alt="HackDuke Example"
                                extraClasses="w-[80%] rounded-2xl"
                            />
                        </FadeIn>

                        <FadeIn delay={200}>
                            <Image
                                src="/images/about-3.png"
                                alt="HackDuke Example"
                                extraClasses="mt-[-20%] ml-[40%] w-[60%] rounded-2xl"
                            />
                        </FadeIn>
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
                            to society&apos;s problems. It&apos;s the beginning
                            of the journey in identifying them, and exploring
                            the solutions to them.
                        </div>
                        <div className="mt-2 text-right text-base font-normal text-hd-dark-blue">
                            — Ashley Qian, 2014 HackDuke Co-director (DukeToday)
                        </div>
                    </div>
                    <div className="my-12 px-[20vw] lg:my-4 lg:px-[5vw]">
                        {/* Photo-sized, centered box so the shapes sit right beside the photo */}
                        <div className="relative isolate mx-auto w-fit lg:w-full">
                            <Deco shape="sparkBlob" pos={{ left: "calc(100% + 28px)", top: "6%" }} width={230} float={3} />
                            <Deco shape="pebble" pos={{ right: "calc(100% + 44px)", bottom: "18%" }} width={56} float={1} delay={150} />
                            <FadeIn>
                                <Image
                                    src="/images/about-4.png"
                                    alt="HackDuke Example"
                                    extraClasses="rounded-2xl lg:w-full"
                                />
                            </FadeIn>
                        </div>
                    </div>
                    <div className="px-[15vw] lg:px-[5vw]">
                        <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                            As the hackathon expanded, we continued to engage
                            with the Duke community through new initiatives like
                            HackDuke Education, where we brought speakers in
                            tech and social justice, educational workshops,
                            career panels, and more to the Duke community. We
                            became the face of Duke&apos;s tech community,
                            responsible for engaging, educating, and inspiring
                            students with both technical and non-technical
                            backgrounds.
                        </div>
                    </div>
                    <div className="relative isolate my-12 px-[5vw] lg:mb-4 lg:px-[5vw]">
                        <Deco shape="hexagon" pos={{ left: "30%", top: "2%" }} width={120} rotate={-8} float={2} />
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <FadeIn>
                                    <Gallery
                                        src={[
                                            "/images/about-5.png",
                                            "/images/about-6.png",
                                            "/images/about-7.png",
                                        ]}
                                        alt={[
                                            "HackDuke Example",
                                            "HackDuke Example",
                                            "HackDuke Example",
                                        ]}
                                    />
                                </FadeIn>
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
                    <div className="relative isolate mb-12 px-[5vw]">
                        <Deco shape="blobSmall" color={ORANGE} pos={{ right: "0%", bottom: "-6%" }} width={140} rotate={-15} float={3} delay={100} />
                        <div className="columns is-desktop is-vcentered">
                            <div className="column">
                                <div
                                    className="mb-3 text-[2rem]
                        font-normal text-hd-dark-blue"
                                >
                                    Moving Virtual
                                </div>
                                <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                                    Of course, we can&apos;t forget 2020.
                                    Despite being scattered across the globe,
                                    our planning teams were able to successfully
                                    organize our annual events online. In July
                                    2020, we hosted our first virtual Ideate,
                                    welcoming students from India, South Korea,
                                    Philippines, and Puerto Rico. In December of the
                                    same year, we hosted yet another successful
                                    Code for Good hackathon.
                                </div>
                            </div>
                            <div className="column">
                                <FadeIn>
                                    <Gallery
                                        src={[
                                            "/images/about-8.png",
                                            "/images/about-9.png",
                                        ]}
                                        alt={[
                                            "HackDuke Example",
                                            "HackDuke Example",
                                        ]}
                                    />
                                </FadeIn>
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
                            So, that&apos;s a brief history of HackDuke! We are
                            so proud of our organization and the growth that has
                            happened the past 13 years. From 100 participants
                            from RTP to over 1000 from across the globe,
                            HackDuke&apos;s impact has tremendously increased.
                            As an organization, we want to continue our growth,
                            to stay true to our core values of community through
                            education and innovation for social good, and, of
                            course, to have fun through it all.
                        </div>
                        <div className="mt-0 mb-2 text-xl font-normal leading-tight text-black">
                            We can&apos;t wait to see where we go! Join us for the journey—you won&apos;t regret it.
                        </div>
                    </div>
                    <div className="relative isolate my-12 px-[20vw] lg:my-4 lg:px-[5vw]">
                        <Deco shape="oval" pos={{ left: "20%", bottom: "-8%" }} width={150} rotate={10} float={3} />
                        <Deco shape="asterisk" color={GREEN} pos={{ right: "20%", bottom: "12%" }} width={34} float={2} delay={250} />
                        <FadeIn>
                            <Image
                                src="/images/team-2025.jpeg"
                                alt="HackDuke Team"
                                extraClasses="ml-[10%] w-[80%] rounded-2xl lg:ml-0 lg:w-full"
                            />
                        </FadeIn>
                    </div>
                </section>
            </div>
            <JoinUs />
            <Footer />
        </>
    );
}
