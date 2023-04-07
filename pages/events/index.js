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
    const [toggle, setToggle] = useState(null);
    let events = require("/public/events.json");
    // const states = {
    //     0: "",
    //     1: "is-active",
    //     2: "is-active",
    //     3: "is-active",
    //     4: "is-active",
    //     5: "is-active",
    //     6: "is-active",
    //     7: "is-active",
    //     8: "is-active",
    //     9: "is-active",
    // };
    // const modal_title_states = {
    //     0: "",
    //     1: "Keynote Speaker",
    //     2: "Code for Good 2022",
    //     3: "Ideate 2022",
    //     4: "Event 4",
    //     5: "Event 5",
    //     6: "Event 6",
    //     7: "Event 7",
    //     8: "Event 8",
    //     9: "Event 9",
    // };
    // const modal_color_states = {
    //     0: "bg-transparent",
    //     1: "bg-[#F7AF1C]",
    //     2: "bg-[#0042C6]",
    //     3: "bg-[#35C69B]",
    //     4: "bg-[#0042C6]",
    //     5: "bg-[#E55511]",
    //     6: "bg-[#0042C6]",
    //     7: "bg-[#F7AF1C]",
    //     8: "bg-[#0042C6]",
    //     9: "bg-[#35C69B]",
    // };
    // const modal_date_states = {
    //     0: "",
    //     1: "April 20, 2035",
    //     2: "January 47, 2001",
    //     3: "March 4, 2020",
    //     4: "December 7, 2003",
    //     5: "January 1, 2001",
    //     6: "January 1, 2001",
    //     7: "January 1, 2001",
    //     8: "January 1, 2001",
    //     9: "January 1, 2001",
    // };
    // const modal_body_states = {
    //     0: "",
    //     1: "What a cool guy Robert Vila was, and look at the turnout! People sure love technical and business keys to success (and also chicken nuggets)",
    //     2: "Have you ever seen a cooler event? Our annual Code for Good something something you know how it is please attend and join we are really very cool",
    //     3: "Not gonna lie, Ideate was kinda. Still a lot of cool designs from this event though! Check out the website and more ;)",
    //     4: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong",
    //     5: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong",
    //     6: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong",
    //     7: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong",
    //     8: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong",
    //     9: "Aw shucks, looks like you missed this really cool event of ours! Click the link to check out the amazing projects students made bing bong",
    // };
    // const modal_img_states = {
    //     0: "",
    //     1: "/images/event1.png",
    //     2: "/images/event2.png",
    //     3: "/images/event3.png",
    //     4: "/images/event4.png",
    //     5: "/images/event5.png",
    //     6: "/images/event6.png",
    //     7: "/images/event7.png",
    //     8: "/images/event8.png",
    //     9: "/images/event9.png",
    // };

    return (
        <>
            <Head>
                <title>Events | HackDuke</title>
            </Head>
            <Navbar color="#36c69b" />

            <section className="section is-small min-h-screen bg-[#36c69b] pt-40">
                <div className="bg-[url('/graphics/Polygon1.svg')] bg-top bg-no-repeat px-[5vw]">
                    <div className="columns is-desktop is-vcentered bg-[url('/graphics/Vector14.svg')] bg-[center_top_1rem] bg-no-repeat">
                        <div className="column font-sans text-white">
                            <div className="z-2 mt-10 text-[3rem] font-semibold">
                                Events
                            </div>
                            <div className="z-2 mb-2 text-[1.25rem] leading-tight">
                                Each year, our teams organize two conferences
                                that attract participants all over the country:
                                Code for Good and Ideate. You might have heard
                                about them :)
                            </div>

                            <img
                                className="mt-[10%] ml-[10%] w-4/5"
                                src="/graphics/building.svg"
                                alt=""
                            />
                        </div>
                        <div className="column">
                            <div className="my-[2rem] rounded-[1rem] border-4 border-dashed border-white p-[1rem] text-center font-sans text-white">
                                <div className="mb-[1rem] text-[1.5rem] font-semibold">
                                    Code for Good 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            264
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            registrants
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            35
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            hacks
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            $3300
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            USD donated
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-[2rem] rounded-[1rem] border-4 border-dashed border-white p-[1rem] text-center font-sans text-white">
                                <div className="mb-[1rem] text-[1.5rem] font-semibold">
                                    Ideate 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            234
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            registrants
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            18
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            submissions
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            $1500
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
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
                    <div className="text-center font-sans text-[#0042c6]">
                        {toggle != null ? (
                            <div className="container" id="event-modal">
                                <div className={"modal is-active"}>
                                    <div
                                        className="modal-background"
                                        onClick={() => setToggle(null)}
                                    ></div>
                                    <div className="modal-card w-4/5">
                                        <header
                                            className={
                                                "modal-card-head bg-[" +
                                                events[toggle].Color +
                                                "]"
                                            }
                                        >
                                            <p className="modal-card-title text-left font-sans font-semibold text-white">
                                                {events[toggle].Title}
                                            </p>
                                            <button
                                                className="delete"
                                                aria-label="close"
                                                onClick={() => setToggle(null)}
                                            ></button>
                                        </header>
                                        <section className="columns modal-card-body is-multiline text-[#242424]">
                                            <div className="column is-half-desktop">
                                                <div className="mb-5">
                                                    <div className="text-left">
                                                        {events[toggle].Date}
                                                    </div>
                                                    <div className="text-left">
                                                        {events[toggle].Time}
                                                    </div>
                                                    <div className="text-left">
                                                        {
                                                            events[toggle]
                                                                .Location
                                                        }
                                                    </div>
                                                    <div className="mb-[0.5rem] mt-[0.25rem] h-[2px] bg-black"></div>
                                                    <div className="text-md text-left font-normal">
                                                        {events[
                                                            toggle
                                                        ].Text.map(
                                                            (text, i) => {
                                                                return (
                                                                    <div
                                                                        key={
                                                                            text +
                                                                            i
                                                                        }
                                                                    >
                                                                        {text}
                                                                        <br />
                                                                        <br />
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="mb-"></div>
                                            </div>
                                            <img
                                                className="column is-half-desktop rounded-2xl"
                                                src={events[toggle].Picture}
                                                alt=""
                                            />
                                        </section>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="mt-[0rem] text-center text-[2rem] font-normal">
                            Calendar
                        </div>
                        <div className="mb-[3rem] text-center text-[1.25rem] font-medium">
                            The stuff we’ve done and the stuff to come!
                        </div>
                    </div>

                    <div className="is-vcentered mx-[10vw] mt-[2rem] grid grid-cols-3 content-center text-center text-xl font-medium text-white lg:grid-cols-1">
                        {/* map each element in events */}
                        {events.map((event, i) => {
                            return (
                                <div
                                    className="relative mb-[3rem] lg:mb-[2rem]"
                                    onClick={() => setToggle(i)}
                                    key={event.Title}
                                >
                                    <div
                                        className={
                                            "duration-250 relative mx-auto h-[12rem] w-[20vw] rounded-lg border-4 bg-cover transition ease-out hover:scale-110 hover:cursor-pointer hover:ease-in lg:w-[20rem]"
                                        }
                                        style={{
                                            borderColor: event.Color,
                                            backgroundImage: `url(${event.Picture})`,
                                        }}
                                    >
                                        <div
                                            className={
                                                "from-[" +
                                                event.Color +
                                                "] from-90%  absolute bottom-0 w-full bg-gradient-to-t"
                                            }
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(180deg,transparent," +
                                                    event.Color,
                                            }}
                                        >
                                            {event.Title}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="section is-small">
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
