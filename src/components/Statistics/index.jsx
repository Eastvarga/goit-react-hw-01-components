import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title.toUpperCase()}</h2> : null}

      <ul className={styles.statList}>
        {stats.map((elem) => (
          <li className={styles.item} key={elem.id}>
            <span className={styles.label}>{elem.label}</span>
            <span className={styles.percentage}>{elem.percentage}&#37;</span>
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
