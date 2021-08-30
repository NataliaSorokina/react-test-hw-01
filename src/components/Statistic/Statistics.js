import PropTypes from 'prop-types';

function Statistics(props) {
  const { label, percentage } = props;
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
