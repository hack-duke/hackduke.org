import Navbar from "../components/Navbar";
import Head from "next/head";
import HeroBackground from "../components/HeroBackground";
import Image from "../components/Image";

import { useRouter } from "next/router";

export default function Links() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Links | HackDuke</title>
            </Head>
            <Navbar color="rgba(0,0,0,0)" />
            <div className="links">
                <div className="hero overflow-hidden">
                    <HeroBackground />
                    <section className="section is-medium">
                        <div className="container flex flex-col items-center justify-center gap-3">
                            <Image
                                src="/images/hd-links-logo.svg"
                                alt=""
                                extraClasses="h-[35vh] align-top"
                            />

                            <div
                                className="flex w-[40vw] min-w-[330px] max-w-[400px] flex-col
                                        items-center justify-center gap-5"
                            >
                                <button
                                    className="w-full rounded-[15px] bg-white px-5
                                            py-3 font-sans text-xl font-black
                                            text-[#0A2A66] ring-[3px] ring-inset ring-[#77037B] ring-offset-[3px] transition hover:bg-[#77037B]
                                            hover:text-white hover:ring-white hover:ring-offset-[#77037B]"
                                    onClick={() => {
                                        window.location.href =
                                            "https://forms.gle/UQH5P2YtikkKmQTT6";
                                    }}
                                >
                                    Apr. 15 VC Event
                                </button>
                                <button
                                    className="w-full rounded-[15px] bg-white px-5
                                            py-3 font-sans text-xl font-black
                                            text-[#0A2A66] ring-[3px] ring-inset ring-[#35C69B] ring-offset-[3px] transition hover:bg-[#35C69B]
                                            hover:text-white hover:ring-white hover:ring-offset-[#35C69B]"
                                    onClick={() => {
                                        router.push("/");
                                    }}
                                >
                                    Website
                                </button>

                                <button
                                    className="w-full rounded-[15px] bg-white
                                            py-3 font-sans text-xl font-black
                                            text-[#0A2A66] ring-[3px] ring-inset ring-[#E55511] ring-offset-[3px] transition hover:bg-[#E55511]
                                            hover:text-white hover:ring-white hover:ring-offset-[#E55511]"
                                    onClick={() => {
                                        window.location.href =
                                            "https://2023.hackduke.org/";
                                    }}
                                >
                                    Code for Good 2023
                                </button>

                                <button
                                    className="w-full rounded-[15px] bg-white
                                            py-3 font-sans text-xl font-black
                                            text-[#0A2A66] ring-[3px] ring-inset ring-[#F7AF1C] ring-offset-[3px] transition hover:bg-[#F7AF1C]
                                            hover:text-white hover:ring-white hover:ring-offset-[#F7AF1C]"
                                    onClick={() => {
                                        window.location.href =
                                            "https://4cf755e0.sibforms.com/serve/MUIEAAcE4j7UohciQWxL1OD-ek-BsIe709PlDqlo2iJqTPxKsdDZcQMilgW4PLJlabuxJCYisXPeMUoU8-72KjY8Jp8HRdVc8vs5B6jCEdO-8R8wS-T0t6u5kDrdRQ8OGrA8019LVSP-8CKlETD2QIJ9tn1yBYpW_l3AFjfbq3FhhcFLnat77sRkg-aXnQKmAMNS_p-3-cQWYBfu";
                                    }}
                                >
                                    Newsletter
                                </button>

                                <button
                                    className="w-full rounded-[15px] bg-white
                                             py-3 font-sans text-xl font-black
                                             text-[#0A2A66] ring-[3px] ring-inset ring-[#5890FF] ring-offset-[3px] transition hover:bg-[#5890FF]
                                            hover:text-white hover:ring-white hover:ring-offset-[#5890FF]"
                                    onClick={() => {
                                        window.location.href =
                                            "https://tinyurl.com/hdsp23";
                                    }}
                                >
                                    Recruitment Form
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
