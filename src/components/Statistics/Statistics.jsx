import PropTypes from 'prop-types';
import { getRandomHexColor } from './RandomColor';
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
      {title ? <StatisticsTitle>{title}</StatisticsTitle> : null}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem
            id={stat.id}
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
  }),
};
