import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
