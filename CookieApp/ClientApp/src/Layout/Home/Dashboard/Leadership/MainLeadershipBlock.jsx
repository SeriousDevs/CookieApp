import { LeadershipElement } from './LeadershipItem/LeadershipElement'
import { Heading } from '../Dashboard.styled';
import { Leadership, LeadershipList } from './MainLeadershipBlock.styled';

export const MainLeadership = ({ users }) => {
    return (
        <Leadership>
            <Heading>Leadership</Heading>
            <LeadershipList>
                {users.length > 0 && [...users].sort((a,b) => b.networth - a.networth).map((el, idx) => <LeadershipElement key={el.id} name={el.login} position={idx + 1} networth={el.networth} />)}
            </LeadershipList>
        </Leadership>
    )
}
