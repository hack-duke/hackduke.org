import MemberCard from "./MemberCard";

function TeamCards(props) {
    const members = require("../public/members.json");
    let teamMembers = members.filter((m) => m.Team === props.team);
    // console.log(teamMembers);
    return (
        <div className="columns is-mobile is-multiline">
            {teamMembers.map((t) => (
                <MemberCard
                    src={"/images/team-2023/" + t.First + t.Last + ".webp"}
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
