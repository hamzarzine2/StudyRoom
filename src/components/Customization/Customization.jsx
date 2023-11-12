import { useState, useEffect } from "react";
import Button from "../Buttons/button";

const Customization = () => {

  const divBody = document.querySelector("body");
  const divBackground = document.getElementById("root");
  const defaultBackground = window.getComputedStyle(divBackground).backgroundImage;
  const btnFontSize = document.getElementById("btnFontSize");

  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [backgroundImage, setBackgroundImage] = useState(defaultBackground);
  const [fontSize, setFontSize] = useState(16);
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

  useEffect(() => {
    divBackground.style.backgroundImage = `url(${backgroundImage})`
  }, [backgroundImage]);

  useEffect(() => {
    divBody.style.fontFamily = `${fontFamily}`;
  }, [fontFamily]);

  useEffect(() => {
    divBody.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  /**
   btnFontSize.addEventListener("click", function () {
         divBody.style.fontSize = `${fontSize}px`;
      }); 
  
   */
  return (
    <>
      <div id="divCustom">
        <h1> Customization </h1>

        <label>
          Image de fond:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <br />
        <label>
          Police:
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            {fontOptions.map((option, index) => (
              <option key={index} value={option}>
                {option.split(",")[0]} {/* Affiche seulement le nom de la police sans les alternatives */}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Taille de la police:
        </label>
        <input type="number" min="10" max="50" value={fontSize} onChange={handleFontSizeChange} />
        <button type="submit" id="btnFontSize">  </button>
        <Button event={handleFontSizeChange} value={"Send"} />
      </div>
    </>
  );
}

export default Customization;
