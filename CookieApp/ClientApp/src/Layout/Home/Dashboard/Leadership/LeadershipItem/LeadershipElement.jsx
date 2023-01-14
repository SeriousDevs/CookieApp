import { NetWorth, LeadershipItem, Position } from "./LeadershipItem.styled";

export const LeadershipElement = ({name, position}) => {

    return (
        <LeadershipItem>
            <Position>{position}</Position>
            <p>{name.toUpperCase()}</p>
            <NetWorth>10</NetWorth>
        </LeadershipItem>
    )
};
