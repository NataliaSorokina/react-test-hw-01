import Statistics from './Statistics';
// import stats from '../'
import PropTypes from 'prop-types';

function StatisticsList({ stats }) {
  return (
    <ul class="stat-list">
      {stats.map(stat => (
        <li key={stat.id}>
          <Statistics label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
