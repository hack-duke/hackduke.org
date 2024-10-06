import { FaLinkedin } from "react-icons/fa";

function MemberCard(props) {
    return (
        <div className="column is-one-fifth-desktop is-one-third-tablet is-half-mobile member-card">
            <a
                className="card-image hover:brightness-80 w-full rounded-2xl brightness-100 transition-all duration-500"
                href={props.linkedin}
                target="_blank"
                rel="noopener noreferrer"
            >
                <picture>
                    {/* <source
                        srcset={props.src + ".jxl"}
                        type="image/jxl"
                    ></source>
                    <source
                        srcset={props.src + ".avif"}
                        type="image/avif"
                    ></source> */}
                    <img
                        src={props.src + ".jpeg"}
                        className="hover:brightness-80"
                        alt="Image"
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            borderRadius: "1rem",
                            aspectRatio: "1",
                        }}
                    />
                </picture>
                <div
                    className="overlay"
                    style={{
                        background: "linear-gradient(45deg, #eef2f3, #8e9eab)",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        opacity: "0",
                        transition: "opacity 0.5s",
                    }}
                ></div>
                {/* LinkedIn Icon for mobile/tablet screen sizes */}
                <FaLinkedin
                    className="faicon has-text-white absolute right-2.5 bottom-2.5"
                    style={{ fontSize: "1.75rem" }}
                />
            </a>

            <div className="card-content mt-2 mb-4 p-0">
                <div className="text-[1.5rem] font-normal">{props.name}</div>
                <div>{props.major}</div>
                <div>Class of {props.year}</div>
                {props.title == "Member" ? (
                    <></>
                ) : (
                    <div className="member-position mt-2 text-[1rem] font-semibold text-[#0042c6]">
                        {props.title}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MemberCard;
