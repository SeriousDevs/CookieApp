import { NetWorth, LeadershipItem, Position } from '../Dashboars.styled';

export const LeadershipElement = ({name, position}) => {
    //сортируются юзеры и приходят по порядку, буду еще передавать сюда индекс каждого после сорта.
    //вначале отсортировались а потом только мапать
    return (
        <LeadershipItem>
            <Position>{position}</Position>
            <p>{name.toUpperCase()}</p>
            <NetWorth>10</NetWorth>
        </LeadershipItem>
    )
};
