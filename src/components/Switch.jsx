import { useContext } from "react";
import { ApiContext } from "../api/apiContext";

/**
 * Create swich Api button
 * @returns {JSX.Element} Switch component
 */
function Switch() {
  const { toggleApi, api } = useContext(ApiContext);
  const handleChange = () => {
    toggleApi();
  };

  return (
    <div className="SwitchContent">
      <label className="SwitchButton">
        <input className="SwitchInput" type="checkbox" checked={api} onChange={handleChange} />
        <span></span>
      </label>
      <span className="SwitchState"> {api ? "Api" : "Mocked"}</span>
    </div>
  );
}

export default Switch;