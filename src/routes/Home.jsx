import Card from "../components/Card";
import Switch from "../components/Switch";

/**
 * Create Home page
 * @returns {JSX.Element} Home component
 */

function Home() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
      <div className="GenreApi">
        <div className="Cards">
          <Card gender="man" id="12" />
          <Card gender="woman" id="18" />
        </div>
        <div className="Switch">
          <h2 className="SwitchTitle">Configurer l'importation des données</h2>
          <Switch />
        </div>
      </div>
    </div>
  );
}

export default Home;