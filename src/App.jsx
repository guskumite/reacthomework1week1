// useEffect function is also necessary to have a better handling of the variables
// linked to the buttons used on Phrasebox and Switchtospanish

import { useState, useEffect } from "react";
import "./App.css";

// Phrases in spanish and english had been imported to two arrays to display them accordingly
// to the selected language in Switchtospanish component

import famousPhrases from "./db/famousPhrases.json";
import famousPhrases_es from "./db/famousPhrases_es.json";

// This function is necessary to generate random numbers that serve as indexes to select different
// phrases and different background images everytime a button is pressed

import { getRandom } from "./utils/random";

// Finally, the components that control the buttons and the displaying of the phrases are selected

import Phrasebox from "./components/Phrasebox";
import Switchtospanish from "./components/Switchtospanish";

// This array is created to implement the functionality to use different backgrounds

const bgList = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  // spanish controls the state of the language switching from english to spanish and viceversa.
  // famous is an array created with structuredClone to store spanish or english phrases.
  // thePhrase is a variable to store the picked phrase in spanish or english
  // currentBg stores the randomly picked background class that is linked to an image file

  const [spanish, setSpanish] = useState("famousPhrases");
  const [famous, setFamous] = useState(famousPhrases);
  const [thePhrase, setThePhrase] = useState(getRandom(famous));
  const [currentBg, setCurrentBg] = useState(getRandom(bgList));

  // this useEffect calling controls the spanish variable to switch between english and spanish.

  useEffect(() => {
    if (spanish === "famousPhrases") {
      setFamous(famousPhrases);
    } else {
      setFamous(famousPhrases_es);
    }
  }, [spanish]);

  // This useEffect calling maintains the famous array updated with phrases in english or spanish
  // and also refreshes the background images

  useEffect(() => {
    setThePhrase(getRandom(famous));
    setCurrentBg(getRandom(bgList));
  }, [famous]);

  // This function is called from the Phrasebox component when the button to change the phrase is pressed

  const handlePhrasePicking = () => {
    setThePhrase(getRandom(famous));
    setCurrentBg(getRandom(bgList));
  };

  // This function is called from the Switchtospanish component when the button to change the language is pressed

  const handleSwitchtospanish = () => {
    setSpanish((prev) =>
      prev === "famousPhrases" ? "famousPhrases_es" : "famousPhrases"
    );
  };

  // Here comes the main output of App.jsx displaying the languages button and then
  // the information coming from the Phrasebox component

  return (
    <main className={`App ${currentBg}`}>
      <Switchtospanish
        handleSwitchtospanish={handleSwitchtospanish}
        spanish={spanish}
      />
      <Phrasebox
        handlePhrasePicking={handlePhrasePicking}
        theWords={thePhrase}
        spanish={spanish}
      />
    </main>
  );
}

export default App;
