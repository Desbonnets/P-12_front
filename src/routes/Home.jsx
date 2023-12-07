import Card from "../components/Card";
import Switch from "../components/Switch";

/**
 * Create Home page
 * @returns {JSX.Element} Home component
 */

function Home() {
  return (
    <div className="GenreApi">
      <div className="Cards">
        <Card gender="man" id="12" />
        <Card gender="woman" id="18" />
      </div>
      <div className="Switch">
        <h2 className="SwitchTitle">Setup Data Import ?</h2>
        <Switch />
      </div>
    </div>
  );
}

export default Home;