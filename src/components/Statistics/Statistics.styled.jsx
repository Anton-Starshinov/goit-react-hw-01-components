import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 30px;
  border: 1px solid black;
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
  gap: 10px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  border: 1px solid grey;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;
export const Label = styled.span`
  font-size: 12px;
  color: black;
`;

export const Percentage = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: black;
`;
