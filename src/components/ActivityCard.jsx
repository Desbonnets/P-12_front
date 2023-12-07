import PropTypes from "prop-types";

/**
 * Create activity card
 * @param {string} name
 * @param {string} unit
 * @param {string} icon
 * @param {number} data
 * @returns {JSX.Element} ActivityCard component
 */
function ActivityCard({ name, unit, icon, data }) {
  return (
    <div className="ActivityCard">
      <img className="CardIcon" src={icon} alt="icon" />
      <div className="Infos">
        <p>
          {data} {unit}
        </p>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

ActivityCard.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default ActivityCard;