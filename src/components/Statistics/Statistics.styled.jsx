import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;
  border: 1px solid black;
  background-color: rgb(227, 241, 248);
`;

export const StatisticsTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: gray;
`;

export const StatisticsList = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  border: 1px solid grey;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;
export const Label = styled.span`
  color: gray;
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-weight: bold;
  font-size: 25px;
  color: black;
`;
