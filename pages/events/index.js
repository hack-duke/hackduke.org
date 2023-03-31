import Navbar from "../../components/Navbar";
import SponsorUs from "../../components/SponsorUs";
import Footer from "../../components/Footer";
import Head from "next/head";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";

export default function Events() {
    const router = useRouter();
    return (
        <>
        
            <Head>
                <title>Events | HackDuke</title>
            </Head>
            <Navbar color="#36c69b" />
            <section className="section is-small bg-[#36c69b] min-h-screen pt-40">
                <div className="px-[5vw] bg-[url('/graphics/Polygon1.svg')] bg-no-repeat bg-top">
                    <div className="columns is-desktop is-vcentered bg-[url('/graphics/Vector14.svg')] bg-no-repeat bg-[center_top_1rem]">
                        <div className="column font-sans text-white">
                            <div className="font-semibold text-[3rem] mt-10 z-2">
                                Events
                            </div>
                            <div className="text-[1.25rem] mb-2 leading-tight z-2">
                                Each year, our teams organize two conferences
                                that attract participants all over the country:
                                Code for Good and Ideate. You might have heard
                                about them :)
                            </div>
                            <img
                                className="w-4/5 mt-[10%] ml-[10%]"
                                src="/graphics/building.svg"
                            />
                        </div>
                        <div className="column">
                            <div className="border-4 border-dashed border-white rounded-[1rem] p-[1rem] my-[2rem] font-sans text-white text-center">
                                <div className="font-semibold text-[1.5rem] mb-[1rem]">
                                    Code for Good 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            264
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            registrants
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            35
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            hacks
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            $3300
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            USD donated
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-4 border-dashed border-white rounded-[1rem] p-[1rem] my-[2rem] font-sans text-white text-center">
                                <div className="font-semibold text-[1.5rem] mb-[1rem]">
                                    Ideate 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            234
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            registrants
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            18
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            submissions
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            $1500
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            USD donated
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="column is-desktop is-vcentered">
                    <div className="font-sans text-[#0042c6] text-center">
                        <div className="text-4xl font-bold mb-[2rem] mt-[2rem]">
                            Calendar
                        </div>
                        <div className="text-xl font-medium">
                            Description (something something here’s the stuff we’ve done and the stuff to come ;))
                        </div>
                    </div>
                    
                    <div className="mx-[10rem] mt-[2rem] grid grid-cols-3 gap-8 is-vcentered text-center content-center text-white font-semibold ">
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className="relative w-[256px] h-[162px] mx-auto rounded-lg border-[#F7AF1C] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#F7AF1C] from-90%">
                                    Keynote Speaker
                                </div>
                            </div>
                            
                        </div>
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className="relative w-[256px] h-[162px] mx-auto rounded-lg border-[#0042C6] border-4 bg-[url('/images/event2.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#0042C6] from-90%">
                                    Code for Good 2022
                                </div>
                            </div> 
                        </div>
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className="relative w-[256px] h-[162px] mx-auto rounded-lg border-[#35C69B] border-4 bg-[url('/images/event3.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#35C69B] from-90%">
                                    Ideate 2022
                                </div>
                            </div>
                            
                        </div>
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className="relative w-[256px] h-[162px] mx-auto rounded-lg border-[#0042C6] border-4 bg-[url('/images/event4.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#0042C6] from-90%">
                                    Event 4
                                </div>
                            </div>
                        </div>
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#E55511] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#E55511] from-90%">
                                    Event 5
                                </div>
                            </div>
                            
                        </div>
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#0042C6] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#0042C6] from-90%">
                                    Event 6
                                </div>
                            </div>

                            
                        </div>
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#F7AF1C] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#F7AF1C] from-90%">
                                    Event 7
                                </div>
                            </div>
                            
                        </div>
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#0042C6] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#0042C6] from-90%">
                                    Event 8
                                </div>
                            </div>
                        </div>
                        <div className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in">
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#35C69B] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#35C69B] from-90%">
                                    Event 9
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            <SponsorUs />
            <Footer />
        </>
    );
}
