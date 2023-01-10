import MemberCard from "./MemberCard";

function TeamCards(props) {
    const members = require("../public/team.json");
    let teamMembers = members.filter((m) => m.Team === props.team);
    console.log(teamMembers);
    return (
        <div className="columns is-mobile is-multiline">
            {teamMembers.map((t) => (
                <MemberCard
                    src={"/images/team-photos/" + t.First + t.Last + ".jpg"}
                    name={t.First + " " + t.Last}
                    title={t.Title}
                    major={t.Major}
                    year={t.Year}
                    linkedin={t.LinkedIn}
                    key={t.First + t.Last}
                />
            ))}
        </div>
    );
}

export default TeamCards;
