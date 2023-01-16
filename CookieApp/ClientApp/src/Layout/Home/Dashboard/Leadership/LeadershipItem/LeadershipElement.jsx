import { memo } from "react";
import { NetWorth, LeadershipItem, Position } from "./LeadershipItem.styled";

const LeadershipElement = ({name, position, networth}) => {

    return (
        <LeadershipItem>
            <Position>{position}</Position>
            <p>{name.toUpperCase()}</p>
            <NetWorth>{networth}</NetWorth>
        </LeadershipItem>
    )
};

export default memo(LeadershipElement);