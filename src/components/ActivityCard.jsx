import CardIcon from "./CardIcon";

/**
 * Create activity card
 * @param {string} name
 * @param {string} unit
 * @param {Object} icon
 * @param {number} data
 * @returns {JSX.Element} ActivityCard component
 */
function ActivityCard({ name, unit, icon, data }) {
  return (
    <div className="ActivityCard">
      <div className="ActivityCardContent">
        <CardIcon classIcon='CardIcon' backgroundIcon={icon.background} colorIcon={icon.color} srcIcon={icon.src} altIcon={icon.alt} opacityIcon='0.07' />
        <div className="Infos">
          <p>
            {data} {unit}
          </p>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;