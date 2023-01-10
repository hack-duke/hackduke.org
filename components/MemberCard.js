function MemberCard(props) {
    return (
        <div className="column is-one-fifth-desktop is-one-third-tablet is-half-mobile member-card">
            <div
                className="card-image"
                style={{ backgroundImage: "url('" + props.src + "')" }}>
                {/* <img src={props.src}></img> */}
            </div>
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
