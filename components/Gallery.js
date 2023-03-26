import React from 'react';
import Image from './Image';

function Gallery(props) {

    return (
        props.imageNames.length == 2 ?

        <>
            <div className="column is-full">
                <Image
                    src={props.imageNames[0]}
                    alt=""
                    extraClasses="rounded-2xl w-[70%]"
                />
            </div>
            <div className="column is-full">
                <Image
                    src={props.imageNames[1]}
                    alt=""
                    extraClasses="rounded-2xl w-[70%] ml-[30%]"
                />
            </div>
        </>
        :

        props.imageNames.length == 3 ?

        <>
            <div className="column is-full">
                <Image
                    src={props.imageNames[0]}
                    alt=""
                    extraClasses="rounded-2xl w-[40%]"
                />
            </div>
            <div className="column is-full">
                <Image
                    src={props.imageNames[1]}
                    alt=""
                    extraClasses="rounded-2xl w-[60%] ml-[20%]"
                />
            </div>
            <div className="column is-full">
                <Image
                    src={props.imageNames[2]}
                    alt=""
                    extraClasses="rounded-2xl w-[40%] ml-[60%]"
                />
            </div>
        </>
        :
        <></>
    );
}

export default Gallery;