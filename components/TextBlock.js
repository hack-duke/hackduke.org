import React from 'react';

function TextBlock(props) {
    return (
        <>
            <div className="title">{props.heading}</div>
            <div className="subtitle">{props.text}</div>
        </>
    );
}

export default TextBlock;