import { useEffect, useState } from "react";

function HeroBackground() {
    // state for mouse x and y position
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // calculate parallax effect for rectangle
    const parallax = (e) => {
        const l1 = document.getElementById("hero-bg-1");
        const l2 = document.getElementById("hero-bg-2");
        const l3 = document.getElementById("hero-bg-3");
        const l4 = document.getElementById("hero-bg-4");
        const l5 = document.getElementById("hero-bg-5");
        const l6 = document.getElementById("hero-bg-6");
        const x = (mousePos.x - l1.offsetLeft) / 100;
        const y = (mousePos.y - l1.offsetTop) / 100;
        l1.style.transform = `translate(${x}px, ${y}px)`;
        l2.style.transform = `translate(${2 * x}px, ${2 * y}px)`;
        l3.style.transform = `translate(${3 * x}px, ${3 * y}px)`;
        l4.style.transform = `translate(${4 * x}px, ${4 * y}px)`;
        l5.style.transform = `translate(${5 * x}px, ${5 * y}px)`;
        l6.style.transform = `translate(${6 * x}px, ${6 * y}px)`;
    };

    useEffect(() => {
        function updateMouse(e) {
            e.preventDefault();
            setMousePos({ x: e.clientX, y: e.clientY });
            console.log(mousePos);
        }
        // add event listener
        window.addEventListener("mousemove", updateMouse);
        parallax();
        // remove event listener on cleanup
        return () => window.removeEventListener("mousemove", updateMouse);
    });

    return (
        <>
            <div className="hero-bg">
                <div id="hero-bg-1">
                    <img
                        id="hero-bg-rectangle"
                        src="/graphics/rectangle.svg"
                        style={{ top: "20vh", left: "10vw", width: "130px" }}
                    />
                    <img
                        id="hero-bg-circle"
                        className="hero-bg-hidden"
                        src="/graphics/circle.svg"
                        style={{ top: "80vh", left: "40vw", width: "80px" }}
                    />
                    <img
                        id="hero-bg-blob-small"
                        src="/graphics/blob_small.svg"
                        style={{ top: "30vh", left: "92vw", width: "160px" }}
                    />
                </div>
                <div id="hero-bg-2">
                    <img
                        id="hero-bg-rectangle-star"
                        src="/graphics/rectangle_star.svg"
                        style={{ top: "20vh", left: "10vw", width: "50px" }}
                    />
                    <img
                        id="hero-bg-circle-triangle"
                        className="hero-bg-hidden"
                        src="/graphics/circle_triangle.svg"
                        style={{ top: "75vh", left: "40vw", width: "50px" }}
                    />
                    <img
                        id="hero-bg-plus"
                        src="/graphics/plus.svg"
                        style={{ top: "15vh", left: "80vw", width: "50px" }}
                    />
                </div>
                <div id="hero-bg-3">
                    <img id="hero-bg-blob" src="/graphics/blob.svg" />
                    <img
                        id="hero-bg-hexagon"
                        src="/graphics/hexagon.svg"
                        style={{ top: "50vh", left: "75vw", width: "250px" }}
                    />
                </div>
                <div id="hero-bg-4">
                    <img
                        id="hero-bg-blob-square"
                        className="hero-bg-hidden"
                        src="/graphics/blob_square.svg"
                        style={{ top: "85vh", left: "10vw", width: "50px" }}
                    />
                    <img
                        id="hero-bg-squiggle"
                        className="hero-bg-hidden"
                        src="/graphics/squiggle.svg"
                        style={{ top: "60vh", left: "60vw", width: "150px" }}
                    />
                    <img
                        id="hero-bg-hexagon-d"
                        src="/graphics/hexagon_d.svg"
                        style={{ top: "70vh", left: "80vw", width: "50px" }}
                    />
                </div>
                <div id="hero-bg-5">
                    <img
                        id="hero-bg-triangle"
                        src="/graphics/triangle.svg"
                        style={{ top: "35vh", left: "76vw", width: "450px" }}
                    />
                    <img
                        id="hero-bg-oval"
                        className="hero-bg-hidden"
                        src="/graphics/oval.svg"
                        style={{ top: "50vh", left: "-15vw", width: "350px" }}
                    />
                </div>
                <div id="hero-bg-6">
                    <img
                        id="hero-bg-blob-circle"
                        className="hero-bg-hidden"
                        src="/graphics/blob_circle.svg"
                        style={{ top: "55vh", left: "6vw", width: "50px" }}
                    />
                    <img
                        id="hero-bg-asterisk"
                        src="/graphics/asterisk.svg"
                        style={{ top: "87vh", left: "53vw", width: "50px" }}
                    />
                </div>
            </div>
        </>
    );
}

export default HeroBackground;
