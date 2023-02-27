import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

function JoinUs(props) {
    const router = useRouter();
    return (
        <>
            <section className="section is-small" id="join-us">
                <div className="container">
                    <div className="title">Join the team!</div>
                    <div className="subtitle">
                        Sound like something you want to be a part of? More
                        information on spring recruitment will be released soon!
                        Join our mailing list to get notified when applications
                        are released.
                    </div>
                    <div
                        className="button"
                        id="index-s1-b1"
                        style={{ color: "#0042c6" }}
                        onClick={() => {
                            router.push("/join");
                        }}
                    >
                        Join our team{" "}
                        <FontAwesomeIcon
                            className="fa-md faicon"
                            icon={faArrowRight}
                        ></FontAwesomeIcon>
                    </div>
                </div>
            </section>
        </>
    );
}

export default JoinUs;
