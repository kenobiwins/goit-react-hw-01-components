import PropTypes from 'prop-types';
import {
    StatisticsSection,
    StatisticsTitle,
    StatisticsList,
    StatisticsListItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {

    return (<StatisticsSection>
        {title && <StatisticsTitle >{title.toUpperCase() }</StatisticsTitle>}
        <StatisticsList >
            {stats.map(({id,label,percentage}, i) => 
                <StatisticsItem
                    key={id}
                    label={label}
                    percentage={percentage}
                    index={i}
                />
            )}
        </StatisticsList>
    </StatisticsSection>)
};


export const StatisticsItem = ({ label, percentage, index }) => {
    return (
        <StatisticsListItem id={index}>
            <span >{label}</span>
            <span >{percentage}%</span>
        </StatisticsListItem>);
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        }))
};