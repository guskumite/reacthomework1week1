// This component identifies if the button to change language has been pressed
// and executes the function handleSwitchtospanish which also handles the setState
// and setEffect functions to control that when the language button is pressed
// it is necessary also to change the message displayed accordingly.

import { getRandom } from "../utils/random";
import "./styles/Switchtospanish.css";

let buttontitle;
const Switchtospanish = ({ handleSwitchtospanish, spanish }) => {
  if (spanish === "famousPhrases_es") {
    buttontitle = "English|Inglés";
  } else {
    buttontitle = "Spanish|Español";
  }

  return (
    <section>
      <button className="sp1" onClick={handleSwitchtospanish}>
        {buttontitle}
      </button>
    </section>
  );
};

export default Switchtospanish;
