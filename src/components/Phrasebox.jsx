import { useState, useEffect } from "react";
import "./styles/Phrasebox.css";

// Phrasebox receives as parameters the function to change the random phrases,
// the variable that contains the picked phrase and author and the current
// status updated in the spanish variable when the change language
// button is pressed on the Switchtospanish component

const Phrasebox = ({ handlePhrasePicking, theWords, spanish }) => {
  // The title, button title (button text) and footer title (Author: or Autor) are
  // updated everytime the change language button is pressed
  // that is why they need a setState for each of them.

  const [title, setTitle] = useState("");
  const [buttontitle, setButtonTitle] = useState("");
  const [footertitle, setFooterTitle] = useState("");

  // the calling to the useEffect function here controls wether to put the phrases in
  // spanish or english everytime the change language button is pressed

  useEffect(() => {
    if (spanish === "famousPhrases_es") {
      setTitle("Frases famosas");
      setButtonTitle("¡Escoge una frase inspiradora!");
      setFooterTitle("Autor: ");
    } else {
      setTitle("Famous phrases");
      setButtonTitle("Pick a phrase that inspires you!");
      setFooterTitle("Author: ");
    }
  }, [spanish]);

  // Finally, the ouput of the Phrasebox component displays the phrase, author and shows the
  // button to pick more random phrases in english or spanish

  return (
    <section className="Phrasebox">
      <h1 className="title1">{title}</h1>

      <section>
        <button className="bt1" onClick={handlePhrasePicking}>
          {buttontitle}
        </button>
        <br></br>
        <article>
          <p>{theWords.phrase}</p>
        </article>
      </section>
      <footer>
        <h4>
          {footertitle} {theWords.author}
        </h4>
      </footer>
    </section>
  );
};

export default Phrasebox;
