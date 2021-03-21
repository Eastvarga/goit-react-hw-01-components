import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : null}

      <ul className="stat-list">
        {stats.map((elem) => (
          <li className="item" key={elem.id}>
            <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}&#37;</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  stats: [
    {
      id: "no Id",
      label: "empty",
      percentage: 0,
    },
  ],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
