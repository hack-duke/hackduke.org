import Navbar from "../../components/Navbar";
import Sponsors from "../../components/Sponsors";
import SponsorUs from "../../components/SponsorUs";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "../../components/Image";
import Gallery from "../../components/Gallery";
import IconTextButton from "../../components/IconTextButton";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useRouter } from "next/router";

export default function Events() {
    const router = useRouter();
    const [toggle, setToggle] = useState(null);
    let events = require("/public/events.json");
    const currentDate = new Date();
    const previousEvents = [];
    const upcomingEvents = [];

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setToggle(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [setToggle]);

    for (const event of events) {
        const jsonDate = new Date(event.iso);

        if (jsonDate.getTime() < currentDate.getTime()) {
            previousEvents.push(event);
        } else {
            upcomingEvents.push(event);
        }
    }

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
                                Each year, our team organizes Duke's flagship
                                hackathon, Code for Good, which attracts
                                participants from all over the country.
                                You may have heard about it before!
                                We have also hosted the Ideate conference in the past.
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
                                    Code for Good 2025
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            250+
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            hackers
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            55
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            hacks
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="text-[3rem] font-semibold">
                                            $4000+
                                        </div>
                                        <div className="mt-[0.5rem] text-[1.5rem] font-normal">
                                            awarded
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
                                            className={"modal-card-head"}
                                            style={{
                                                backgroundColor:
                                                    events[toggle].Color,
                                            }}
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

                                                    <div className="text-left">
                                                        {events[
                                                            toggle
                                                        ].hasOwnProperty(
                                                            "Link"
                                                        ) && (
                                                                <IconTextButton
                                                                    style="display: none;"
                                                                    text={
                                                                        events[
                                                                            toggle
                                                                        ].LinkTitle
                                                                    }
                                                                    onClick={() => {
                                                                        router.push(
                                                                            events[
                                                                                toggle
                                                                            ].Link
                                                                        );
                                                                    }}
                                                                    icon={
                                                                        <AiOutlineArrowRight
                                                                            size={
                                                                                28
                                                                            }
                                                                            className="pl-1"
                                                                        />
                                                                    }
                                                                />
                                                            )}
                                                    </div>
                                                    <br />
                                                    <div className="footer-icons">
                                                        {events[
                                                            toggle
                                                        ].hasOwnProperty(
                                                            "Linkedin"
                                                        ) && (
                                                                <FaLinkedin
                                                                    className="fa-lg faicon"
                                                                    onClick={() => {
                                                                        window.open(
                                                                            events[
                                                                                toggle
                                                                            ]
                                                                                .Linkedin
                                                                        );
                                                                    }}
                                                                />
                                                            )}

                                                        {events[
                                                            toggle
                                                        ].hasOwnProperty(
                                                            "Instagram"
                                                        ) && (
                                                                <FaInstagram
                                                                    className="fa-lg faicon"
                                                                    onClick={() => {
                                                                        window.open(
                                                                            events[
                                                                                toggle
                                                                            ]
                                                                                .Instagram
                                                                        );
                                                                    }}
                                                                />
                                                            )}
                                                    </div>
                                                </div>
                                                <div className="mb-"></div>
                                            </div>
                                            <img
                                                className="column is-half-desktop rounded-2xl"
                                                src={events[toggle].Picture}
                                                style={{ objectFit: "cover" }}
                                                alt=""
                                            />
                                        </section>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {upcomingEvents.length > 0 && (
                            <div className="mt-[0rem] text-center text-[2rem] font-normal">
                                Upcoming Events
                            </div>
                        )}
                    </div>

                    <div className="is-vcentered align-items-center mx-[10vw] mt-[2rem] grid grid-cols-3 content-center text-center text-xl font-medium text-white lg:mx-[0vw] lg:grid-cols-1">
                        {/* map each element in events */}
                        {upcomingEvents.map((event, i) => {
                            return (
                                <div
                                    className="relative mb-[3rem] lg:mb-[2rem]"
                                    key={event.Title}
                                    onClick={(e) => {
                                        if (
                                            e.target.classList.contains(
                                                "duration-250"
                                            )
                                        ) {
                                            setToggle(
                                                events.findIndex(
                                                    (e) =>
                                                        e.Title === event.Title
                                                )
                                            );
                                        }
                                    }}
                                >
                                    <div
                                        className={
                                            "duration-250 relative mx-auto h-[12rem] w-[20vw] rounded-lg border-4 bg-cover transition ease-out hover:scale-110 hover:cursor-pointer hover:ease-in lg:w-[20rem]"
                                        }
                                        style={{
                                            borderColor: event.Color,
                                            // backgroundSize: "contain",
                                            // backgroundRepeat: "no-repeat",
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
                                            <div className="h-full w-full">
                                                {event.Title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-[0rem] text-center text-[2rem] font-normal  text-[#0042c6]">
                        Previous Events
                    </div>
                    <div className="is-vcentered align-items-center mx-[10vw] mt-[2rem] grid grid-cols-3 content-center text-center text-xl font-medium text-white lg:mx-[0vw] lg:grid-cols-1">
                        {/* map each element in events */}
                        {previousEvents.map((event, i) => {
                            return (
                                <div
                                    className="relative mb-[3rem] lg:mb-[2rem]"
                                    key={event.Title}
                                    onClick={(e) => {
                                        if (
                                            e.target.classList.contains(
                                                "duration-250"
                                            )
                                        ) {
                                            setToggle(
                                                events.findIndex(
                                                    (e) =>
                                                        e.Title === event.Title
                                                )
                                            );
                                        }
                                    }}
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
                                            <div className="h-full w-full">
                                                {event.Title}
                                            </div>
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
                    <div className="title">Current Sponsors and Partners</div>
                    <Sponsors url="current_sponsors" />
                </div>
            </section>
            <section className="section is-small">
                <div className="container">
                    <div className="title">Past Sponsors</div>
                    <Sponsors url="sponsors" />
                </div>
            </section>

            <SponsorUs />
            <Footer />
        </>
    );
}
