import Navbar from "../components/Navbar";
import Head from "next/head";
import HeroBackground from "../components/HeroBackground";

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
                        <div className="container flex flex-col items-center justify-center gap-2">
                            <img
                                src="/images/hd-links-logo.svg"
                                className=" h-[35vh] align-top"
                            />
                            <div className="text-center font-sans text-3xl font-bold text-white">
                                @hackduke
                            </div>

                            <div
                                className="flex w-[40vw] min-w-[330px] max-w-[400px] flex-col
                                        items-center justify-center gap-5"
                            >
                                <button
                                    className="outline-3 w-full rounded-[15px] bg-white px-5
                                            py-3 font-sans text-xl font-black
                                            text-[#0A2A66] outline outline-offset-[-5px] outline-[#35C69B]
                                            transition hover:bg-[#35C69B] hover:text-white hover:outline-white"
                                    onClick={() => {
                                        window.location.href =
                                            "https://4cf755e0.sibforms.com/serve/MUIEAAcE4j7UohciQWxL1OD-ek-BsIe709PlDqlo2iJqTPxKsdDZcQMilgW4PLJlabuxJCYisXPeMUoU8-72KjY8Jp8HRdVc8vs5B6jCEdO-8R8wS-T0t6u5kDrdRQ8OGrA8019LVSP-8CKlETD2QIJ9tn1yBYpW_l3AFjfbq3FhhcFLnat77sRkg-aXnQKmAMNS_p-3-cQWYBfu";
                                    }}
                                >
                                    join newsletter
                                </button>

                                <button
                                    className="outline-3 w-full rounded-[15px] bg-white
                                            py-3 font-sans text-xl font-black
                                            text-[#0A2A66] outline outline-offset-[-5px] outline-[#E55511]
                                            transition hover:bg-[#E55511] hover:text-white hover:outline-white"
                                    onClick={() => {
                                        router.push("/");
                                    }}
                                >
                                    website
                                </button>

                                <button
                                    className="outline-3 w-full rounded-[15px] bg-white
                                            py-3 font-sans text-xl font-black
                                            text-[#0A2A66] outline outline-offset-[-5px] outline-[#F7AF1C]
                                            transition hover:bg-[#F7AF1C] hover:text-white hover:outline-white"
                                    onClick={() => {
                                        window.location.href =
                                            "https://tinyurl.com/hdsp23";
                                    }}
                                >
                                    recruitment form
                                </button>

                                <button
                                    className="outline-3 w-full rounded-[15px] bg-white
                                             py-3 font-sans text-xl font-black
                                             text-[#0A2A66] outline outline-offset-[-5px] outline-[#5890FF]
                                            transition hover:bg-[#5890FF] hover:text-white hover:outline-white"
                                    onClick={() => {
                                        window.location.href =
                                            "https://2023.hackduke.org/";
                                    }}
                                >
                                    code for good 2023
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
