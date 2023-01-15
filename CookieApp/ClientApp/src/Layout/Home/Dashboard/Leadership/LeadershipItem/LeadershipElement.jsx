import { NetWorth, LeadershipItem, Position } from "./LeadershipItem.styled";

export const LeadershipElement = ({name, position, networth}) => {

    return (
        <LeadershipItem>
            <Position>{position}</Position>
            <p>{name.toUpperCase()}</p>
            <NetWorth>{networth}</NetWorth>
        </LeadershipItem>
    )
};
