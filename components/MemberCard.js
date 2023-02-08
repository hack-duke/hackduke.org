import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

function MemberCard(props) {
    return (
        <div className="column is-one-fifth-desktop is-one-third-tablet is-half-mobile member-card">
            <a
                className="card-image"
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
                    style={{ position: "absolute", right: 10, bottom: 10 }}
                    className="faicon  has-text-white"
                    icon={fab.faLinkedin}></FontAwesomeIcon>
            </a>
            <div className="card-content">
                <div className="member-name">{props.name}</div>
                <div className="member-major">{props.major}</div>
                <div className="member-year">Class of {props.year}</div>
                {props.title == "Member" ? (
                    <></>
                ) : (
                    <div className="member-position">{props.title}</div>
                )}
            </div>
        </div>
    );
}

export default MemberCard;
