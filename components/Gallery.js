import React from 'react';
import Image from './Image';

function Gallery(props) {

    return (
        props.src.length == 2 ?

        <>
            <div className="column is-full">
                <Image
                    src={props.src[0]}
                    alt={props.alt[0]}
                    extraClasses="rounded-2xl w-[70%]"
                />
            </div>
            <div className="column is-full">
                <Image
                    src={props.src[1]}
                    alt={props.alt[1]}
                    extraClasses="rounded-2xl w-[70%] ml-[30%]"
                />
            </div>
        </>
        :

        props.src.length == 3 ?

        <>
            <div className="column is-full">
                <Image
                    src={props.src[0]}
                    alt={props.alt[0]}
                    extraClasses="rounded-2xl w-[40%]"
                />
            </div>
            <div className="column is-full">
                <Image
                    src={props.src[1]}
                    alt={props.alt[1]}
                    extraClasses="rounded-2xl w-[60%] ml-[20%]"
                />
            </div>
            <div className="column is-full">
                <Image
                    src={props.src[2]}
                    alt={props.alt[2]}
                    extraClasses="rounded-2xl w-[40%] ml-[60%]"
                />
            </div>
        </>
        :
        <></>
    );
}

export default Gallery;