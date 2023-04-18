import React from "react";

function Sponsors(props) {
    let sponsors = require(`../public/${props.url}.json`);

    return (
        <div className="flex flex-col">
            <div className="columns is-multiline is-centered is-vcentered is-mobile">
                {sponsors.map((s) => (
                    <a
                        key={s.Name}
                        href={s.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="column is-3-tablet is-6-mobile transform transition duration-500 hover:scale-110"
                    >
                        <div className="m-2">
                            <img
                                className="md:max-h-12 m-auto table max-h-16 lg:max-h-16"
                                src={`/sponsors/${s.Image}`}
                                alt={s.Image}
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Sponsors;
