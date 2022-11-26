import { PropTypes } from "prop-types";
import {
    FriendsListWrapper,
    FriendsItemStyled,
    Status,
} from "./FriendList.styled";
import { RiRadioButtonLine } from 'react-icons/ri';

export const FriendList = ({ friends }) => {
    return (<FriendsListWrapper>
        {friends.map(({id,avatar,name,isOnline}, i) => <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
        />)}
    </FriendsListWrapper>)
};

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItemStyled >
            <Status checkOnline={isOnline}>
                <RiRadioButtonLine />
                {isOnline ? 'online' : 'offline'}
            </Status>
            <img src={avatar} alt={`${name} avatar`} width="48px" />
            <p>{name}</p>
        </FriendsItemStyled>)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number
        }))
};