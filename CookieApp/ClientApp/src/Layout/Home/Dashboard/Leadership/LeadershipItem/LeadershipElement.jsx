import { memo } from "react";
import { useSelector } from "react-redux";
import { getUser } from "redux/userSlice";
import { NetWorth, LeadershipItem, Position, LeadershipItemUser } from "./LeadershipItem.styled";
import aveta from 'aveta';  

const LeadershipElement = ({name, position, networth}) => {
    const user = useSelector(getUser);

    if (user === name) {
        return (
            <LeadershipItemUser>
                <Position>{position}</Position>
                <p>{name.toUpperCase()}</p>
                <NetWorth>{aveta(networth)}</NetWorth>
            </LeadershipItemUser>
        )
    }

    return (
        <LeadershipItem>
            <Position>{position}</Position>
            <p>{name.toUpperCase()}</p>
            <NetWorth>{aveta(networth)}</NetWorth>
        </LeadershipItem>
    )
};

export default memo(LeadershipElement);