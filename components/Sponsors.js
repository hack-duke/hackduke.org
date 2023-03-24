import React from "react";

function Sponsors() {
    let sponsors = require("../public/sponsors.json");

    return (
        <div className="flex flex-col">
            <div className="columns is-multiline is-centered is-vcentered is-mobile">
                {sponsors.map((s) => (
                    <div
                        key={s.Name}
                        className="column is-3-tablet is-6-mobile transform 
                transition duration-500 hover:scale-110"
                    >
                        <div className="m-2">
                            <a href={s.Link}>
                                <img
                                    className="m-auto block max-h-16 w-fit md:max-h-12 lg:max-h-16"
                                    src={`/sponsors/${s.Image}`}
                                    alt={s.Image}
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sponsors;
