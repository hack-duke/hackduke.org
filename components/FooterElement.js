import React from 'react';
import { useRouter } from "next/router";

function FooterElement(props) {
    const router = useRouter();
    return (
        <div
            className="column-text"
            onClick={() => {
                router.push(
                    props.link
                );
            }}
        >
            <p>{props.text}</p>
        </div>
    );
}

export default FooterElement;