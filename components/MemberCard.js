function MemberCard(props) {
    // console.log(props.src);
    return (
        <a href={props.linkedin}>
            <div className="member-card card">
                <div className="card-image">
                    <figure className="image">
                        <img src={props.src}></img>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="member-name">{props.name}</p>
                    <p className="position">{props.title}</p>
                    <p className="major">{props.major}</p>
                </div>
            </div>
        </a>
    );
}

export default MemberCard;