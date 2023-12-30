import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Create a user card
 * @param {{gender:string, id:string}} param0
 * @returns {JSX.Element} Card component
 */

function Card({ gender, id }) {
  return (
    <Link to={`user/${id}`} style={{textDecoration:'none'}}>
      <div className="CardWrapper">
        <img style={{height: '5rem', width: '5rem'}} src={gender === "woman" ? 'images/woman.svg' : 'images/man.svg'} alt="genre" />
        <h2 className="cardTitle">User : {id}</h2>
      </div>
    </Link>
  );
}

Card.propTypes = {
  gender: PropTypes.oneOf(['woman', 'man']).isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;