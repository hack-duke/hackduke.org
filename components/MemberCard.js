function MemberCard(props) {
    // console.log(props.src);
    return (
        <>
            <div className="member-card card">
                <div className="card-image">
                    <figure className="image">
                        <img src={props.src} style={{width: 200, height: 200}}></img>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="member-name">{props.name}</p>
                    <p className="position">{props.title}</p>
                    <p className="major">{props.major}</p>
                </div>
            </div>
        </>
    );
}

export default MemberCard;