import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

function MemberCard(props) {
    return (
        <div className="column is-one-fifth-desktop is-one-third-tablet is-half-mobile member-card">
            <a
                className="card-image w-full rounded-2xl bg-[100%] bg-center bg-no-repeat brightness-100 transition-all duration-500 after:block after:pb-[100%] after:content-[''] hover:bg-[110%] hover:brightness-[80%] hover:transition-all hover:duration-500"
                style={{
                    backgroundImage:
                        "url('" +
                        props.src +
                        "'), linear-gradient(45deg, #eef2f3, #8e9eab)",
                    backgroundSize: "cover",
                }}
                href={props.linkedin}
                target="_blank"
                rel="noopener noreferrer">
                {/* LinkedIn Icon for mobile/tablet screen sizes */}
                <FontAwesomeIcon
                    className="faicon has-text-white absolute right-2.5 bottom-2.5"
                    style={{ fontSize: "1.75rem" }}
                    // style necessary bc globals.css has faicon
                    icon={fab.faLinkedin}></FontAwesomeIcon>
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
