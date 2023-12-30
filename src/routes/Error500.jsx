import { Link } from "react-router-dom";

/**
 * Create Error 500 page
 * @returns {JSX.Element} Error component
 */

function Error500() {
  return (
    <div className="Error">
      <section className="SectionError">
        <h1 style={{color: 'red', fontSize: '10rem'}}>Erreur 500</h1>
        <p style={{fontSize: '2rem'}}>Une erreur est sur venue sur l'API!</p>
        <Link className="LinkError" to="/">Retourner sur la page d'accueil</Link>
      </section>
    </div>
  );
}
export default Error500;