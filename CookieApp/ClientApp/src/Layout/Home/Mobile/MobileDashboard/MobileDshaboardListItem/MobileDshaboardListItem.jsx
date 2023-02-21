import { seriousNumbers } from "common/ConvertFunc/convertFunc";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUser } from "redux/userSlice";
import { NetWorth, LeadershipItem, Position, LeadershipItemUser } from "common/common.styled";


const MobileDshaboardListItem = ({name, position, networth}) => {
    const user = useSelector(getUser);

    if (user === name) {
        return (
            <LeadershipItemUser>
                <Position>{position}</Position>
                <p>{name.toUpperCase()}</p>
                <NetWorth>{seriousNumbers(networth)}</NetWorth>
            </LeadershipItemUser>
        )
    }

    return (
        <LeadershipItem>
            <Position>{position}</Position>
            <p>{name.toUpperCase()}</p>
            <NetWorth>{seriousNumbers(networth)}</NetWorth>
        </LeadershipItem>
    )
};

export default memo(MobileDshaboardListItem);