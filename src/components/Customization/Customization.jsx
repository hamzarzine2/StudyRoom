import { useState } from "react";
import Button from "../Buttons/button";
import "./Customization.css"

const Customization = () => {

  // const divBody = document.querySelector("body");
  const divBackground = document.getElementById("root");
  const divRoot = document.getElementById("root");
  const defaultBackground = window.getComputedStyle(divBackground).backgroundImage;

  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [backgroundImage, setBackgroundImage] = useState(defaultBackground);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#000000');
  const fontOptions = [
    "Arial, sans-serif",
    "Times New Roman, serif",
    "Courier New, monospace",
    "Georgia, serif",
    "Verdana, sans-serif",
    "Impact, sans-serif",
    "Comic Sans MS, cursive",
    "Trebuchet MS, sans-serif",
    "Palatino Linotype, serif",
    "Lucida Console, monospace"
  ];

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBackgroundImage(event.target.result);
      };
      reader.readAsDataURL(file);

    }
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleAllChanges = () => {
    divBackground.style.backgroundImage = `url(${backgroundImage})`
    divRoot.style.fontFamily = `${fontFamily}`;
    divRoot.style.fontSize = `${fontSize}px`;
    divRoot.style.color = `${fontColor}`;
  };

  return (
    <>
      <div id="divCustom">
        <h1> Customization </h1>

        <label>
          Image de fond: </label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <br />
        <label>
          Police: </label>
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          {fontOptions.map((option, index) => (
            <option key={index} value={option}>
              {option.split(",")[0]} {/* Affiche seulement le nom de la police sans les alternatives */}
            </option>
          ))}
        </select>

        <br />
        <label>
          Taille de la police:
        </label>
        <input type="number" min="10" max="50" value={fontSize} onChange={handleFontSizeChange} />

        <br />
        <label>
          Couleur de la police:
        </label>
        <input type="color" value={fontColor} onChange={handleFontColorChange} />
        <br />

        <Button event={handleAllChanges} value={"Save"} class="btnSave" />
      </div>
    </>
  );
}

export default Customization;
