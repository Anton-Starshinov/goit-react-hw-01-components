import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 8px;
  height: 100%;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 25px 11px 25px;
  background-color: rgb(227, 241, 248);
  border: 1px solid grey;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Status = styled.span`
  color: ${p => {
    return p.selected ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  margin-left: 5px;
`;

export const Name = styled.p`
  font-weight: bold;
  margin-left: 15px;
  font-size: 20px;
`;
