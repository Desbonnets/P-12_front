import { Link } from "react-router-dom";

/**
 * Create Error404 page
 * @returns {JSX.Element} Error component
 */

function Error() {
  return (
    <div className="Error">
      <section className="SectionError">
        <h1 style={{color: 'red', fontSize: '10rem'}}>Erreur 404</h1>
        <p style={{fontSize: '2rem'}}>La page que vous demandez n'éxiste pas !</p>
        <Link className="LinkError" to="/">Retourner sur la page d'accueil</Link>
      </section>
    </div>
  );
}
export default Error;