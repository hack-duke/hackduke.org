import { AiOutlineArrowRight } from "react-icons/ai";
import IconTextButton from "./IconTextButton";

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

                    <IconTextButton
                        text="Join our team"
                        onClick={() => {
                            router.push("/join");
                        }}
                        icon={
                            <AiOutlineArrowRight size={28} className="pl-1" />
                        }
                    />
                </div>
            </section>
        </>
    );
}

export default JoinUs;
