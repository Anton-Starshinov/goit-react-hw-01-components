import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatisticsTitle>Upload stats</StatisticsTitle>

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem id={stat.id} key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
