import Navbar from "../../components/Navbar";
import Sponsors from "../../components/Sponsors";
import SponsorUs from "../../components/SponsorUs";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "../../components/Image";
import Gallery from "../../components/Gallery";
import IconTextButton from "../../components/IconTextButton";
import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";



export default function Events() {
    const router = useRouter();
    const [toggle, setToggle] = useState(0);
    const states = {
        0: "", 1: "is-active", 2: "is-active", 3: "is-active",
        4: "is-active", 5: "is-active", 6: "is-active",
        7: "is-active", 8: "is-active", 9: "is-active"
    };
    const modal_title_states = {
        0: "", 1: "Keynote Speaker", 2: "Code for Good 2022", 3: "Ideate 2022",
        4: "Event 4", 5: "Event 5", 6: "Event 6",
        7: "Event 7", 8: "Event 8", 9: "Event 9"
    };
    const modal_color_states = {
        0: "bg-transparent", 1: "bg-[#F7AF1C]", 2: "bg-[#0042C6]", 3: "bg-[#35C69B]", 
        4: "bg-[#0042C6]", 5: "bg-[#E55511]", 6: "bg-[#0042C6]", 
        7: "bg-[#F7AF1C]", 8: "bg-[#0042C6]", 9: "bg-[#35C69B]"
    }; 
    const modal_date_states = {
        0: "",
        1: "April 20, 2035",
        2: "January 47, 2001",
        3: "March 4, 2020",
        4: "December 7, 2003",
        5: "January 1, 2001",
        6: "January 1, 2001",
        7: "January 1, 2001",
        8: "January 1, 2001",
        9: "January 1, 2001",
    };
    const modal_body_states = {
        0: "", 
        1: "What a cool guy Robert Vila was, and look at the turnout! People sure love technical and business keys to success (and also chicken nuggets)", 
        2: "Have you ever seen a cooler event? Our annual Code for Good something something you know how it is please attend and join we are really very cool", 
        3: "Not gonna lie, Ideate was kinda. Still a lot of cool designs from this event though! Check out the website and more ;)",
        4: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong",
        5: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong", 
        6: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong",
        7: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong", 
        8: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong", 
        9: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong"
    };
    
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
                                alt=""
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
                        <div className="container" id="event-modal">
                            <div className={"modal " + states[toggle]}>
                                <div className="modal-background" onClick={() => setToggle(0)}></div>
                                <div className="modal-card">
                                    <header className={"modal-card-head " + modal_color_states[toggle]} >
                                        <p className="modal-card-title text-left text-white font-sans font-semibold">{modal_title_states[toggle]}</p>
                                        <button className="delete" aria-label="close" onClick={() => setToggle(0)}></button>
                                    </header>
                                    <section className="modal-card-body text-[#242424]">
                                        <div className="divide-y divide-black">
                                            <div className="text-left">
                                                {modal_date_states[toggle]}
                                            </div>
                                            <div className="text-left font-normal text-lg">
                                                {modal_body_states[toggle]}
                                            </div>
                                        </div>

                                        <div>
                                            <button className="button">View the event slides here</button>
                                        </div>
                                        <div>
                                            <button className="button">View the event recording here</button>
                                        </div>
                                    </section>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="text-4xl font-bold mb-[2rem] mt-[2rem]">
                            Calendar
                        </div>
                        <div className="text-xl font-medium">
                            Description (something something here’s the stuff we’ve done and the stuff to come ;))
                        </div>
                    </div>
                    
                    <div className="mx-[10rem] mt-[2rem] grid grid-cols-3 gap-8 is-vcentered text-center content-center text-white font-medium text-xl">
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(1)}>
                            <div className="relative w-[256px] h-[162px] mx-auto rounded-lg border-[#F7AF1C] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#F7AF1C] from-90%">
                                    Keynote Speaker
                                </div>
                            </div>
                        </div>
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(2)}>
                            <div 
                                className="relative w-[256px] h-[162px] mx-auto rounded-lg border-[#0042C6] border-4 bg-[url('/images/event2.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#0042C6] from-90%">
                                    Code for Good 2022
                                </div>
                            </div> 
                        </div>
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(3)}>
                            <div className="relative w-[256px] h-[162px] mx-auto rounded-lg border-[#35C69B] border-4 bg-[url('/images/event3.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#35C69B] from-90%">
                                    Ideate 2022
                                </div>
                            </div>
                            
                        </div>
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(4)}>
                            <div className="relative w-[256px] h-[162px] mx-auto rounded-lg border-[#0042C6] border-4 bg-[url('/images/event4.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#0042C6] from-90%">
                                    Event 4
                                </div>
                            </div>
                        </div>
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(5)}>
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#E55511] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#E55511] from-90%">
                                    Event 5
                                </div>
                            </div>
                            
                        </div>
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(6)}>
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#0042C6] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#0042C6] from-90%">
                                    Event 6
                                </div>
                            </div>

                            
                        </div>
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(7)}>
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#F7AF1C] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#F7AF1C] from-90%">
                                    Event 7
                                </div>
                            </div>
                            
                        </div>
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(8)}>
                            <div className=
                                "relative w-[256px] h-[162px] mx-auto rounded-lg border-[#0042C6] border-4 bg-[url('/images/event1.png')] bg-cover">
                                <div className="absolute w-full bottom-0 bg-gradient-to-t from-[#0042C6] from-90%">
                                    Event 8
                                </div>
                            </div>
                        </div>
                        <div 
                            className="relative hover:scale-110 transition duration-150 ease-out hover:ease-in"
                            onClick={() => setToggle(9)}>
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
            <section className="section is-medium">
                <div className="container">
                    <div className="title">Past Sponsors</div>
                    <Sponsors />
                </div>
            </section>

            <SponsorUs />
            <Footer />
        </>
    );
}
