import MemberCard from "./MemberCard";

function TeamCards(props) {
    const members = require("../public/members.json");
    let teamMembers = members.filter((m) => m.Team === props.team);
    // sort teammembers by title, then by last name, then by first name
    teamMembers.sort((a, b) => {
        if (a.Title < b.Title) {
            return -1;
        } else if (a.Title > b.Title) {
            return 1;
        } else {
            if (a.Last < b.Last) {
                return -1;
            } else if (a.Last > b.Last) {
                return 1;
            } else {
                if (a.First < b.First) {
                    return -1;
                } else if (a.First > b.First) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    });
    // console.log(teamMembers);
    return (
        <div className="columns is-mobile is-multiline">
            {teamMembers.map((t) => (
                <MemberCard
                    src={"/images/team-2024/" + t.First + t.Last}
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
