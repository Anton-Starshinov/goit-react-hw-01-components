import styled from 'styled-components';

export const ProfileCard = styled.article`
  width: 350px;
  text-align: center;
  margin-top: 50px;
  background-color: rgb(227, 241, 248);
  margin-left: 30px;
  border: 1px solid black;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Description = styled.div`
  padding-top: 30px;
`;

export const NameText = styled.p`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

export const InfoText = styled.p`
  color: gray;
  font-size: 20px;
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 100px;
  border: 2px solid black;
  width: 150px;
  height: 150px;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  padding-left: 0;
  background-color: rgb(205, 233, 245);
  margin-bottom: 0;
  margin-top: 0;
  list-style-type: none;
`;

export const StatsItem = styled.li`
  width: 100%;
  border: 1px solid #d2d8d9;
  gap: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const StatsEl = styled.span`
  display: block;
  color: gray;
  font-size: 20px;
`;

export const StatsElNumber = styled.span`
  display: block;
  font-weight: bold;
  font-size: 25px;
`;
