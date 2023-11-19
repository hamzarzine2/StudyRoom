import React, { useContext } from "react";
import Button from "../Buttons/button";
import { ContextCustom } from "../../contexts/CustomContext";
import "./Customization.css"

const Customization = () => {

  const { 
    getFontSize,
    getfontFamily,
    getfontColor,

    getfontFamilyOptions,
    getbackgroundOptions,
    setCustomFontSize,
    setCustomFontFamily,
    setCustomFontColor,
    changeBackgroundImage,
    handleAllChanges, } = useContext(ContextCustom);

    const backgroundOptions = getbackgroundOptions();
    const fontFamily = getfontFamily();
    const fontColor = getfontColor();
    const fontSize = getFontSize();
 
  const handleFontFamilyChange = (e) => {
    setCustomFontFamily(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setCustomFontSize(e.target.value);
  };


  const handleFontColorChange = (e) => {
    console.log(e.target.value);
    setCustomFontColor(e.target.value);
    console.log(e.target.value);
  };


  const handleBackgroundChange = (e) => {
    changeBackgroundImage(e);

  };

  const renderBackgroundOptions = () => {
    const noBullets = "list-style-type:none;";
    return (
      <ul id="listBg">
        {backgroundOptions.map((key, index) => (
          <li key={index}>
            <Button value={`Background ${index + 1}`} event={() => handleBackgroundChange(key)} />
            <img src={key} alt={`Thumbnail ${index}`} height={50} />
            <br />
          </li>
        ))}
      </ul>
    );
  };




  return (
    <>
      <div id="divCustom">
        <h1> Customization </h1>

        <label>
          Image de fond: </label>
        {renderBackgroundOptions()}
        <br />
        <label>
          Police: </label>
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          {getfontFamilyOptions().map((option, index) => (
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
