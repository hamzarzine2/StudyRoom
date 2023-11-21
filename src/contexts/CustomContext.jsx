import React, { useState, useContext,useEffect } from "react";
import background from "../assets/background.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";

const ContextCustom = React.createContext(null);

const CustomProviderWrapper = (props) => {

  const divRoot = document.getElementById("root");
  const defaultBackground = window.getComputedStyle(divRoot).backgroundImage;

  const [custom, setCustom] = useState({
      backgroundImage: defaultBackground,
      fontFamily: 'Arial, sans-serif',
      fontSize: 16,
      fontColor: '#000000',
    });


  const backgroundOptions = [
    `${background}`,
    `${background2}`,
    `${background3}`,
  ];

  const mapBackground = {
    "/src/assets/background.jpg": background,
    "/src/assets/background2.jpg": background2,
    "/src/assets/background3.jpg": background3,
  }

  const fontFamilyOptions = [
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

  const getCustom = () => custom;
  const getfontFamily = () => custom.fontFamily;
  const getFontSize = () => custom.fontSize;
  const getfontColor = () => custom.fontColor;
  const getfontFamilyOptions = () => fontFamilyOptions;
  const getbackgroundOptions = () => backgroundOptions;
  const getMapBackground = () => mapBackground;


  
  const handleAllChanges = () => {
    divRoot.style.backgroundImage = `url(${custom.backgroundImage})`;
    divRoot.style.fontFamily = `${custom.fontFamily}`;
    divRoot.style.fontSize = `${custom.fontSize}px`;
    divRoot.style.color = `${custom.fontColor}`;
    
    /**const updatedCustom =
    {
      backgroundImage: custom.backgroundImage,
      fontFamily: custom.fontFamily,
      fontSize: custom.fontSize,
      fontColor: custom.fontColor,
    };
     setCustom(updatedCustom);**/
  };


  const exposed = {
    getFontSize,
    setCustom,
    getfontFamily,
    getfontColor,
    getfontFamilyOptions,
    getbackgroundOptions,
    getMapBackground,
    handleAllChanges,
    //changeAllCustoms,
    getCustom,
  };

  return (
    <ContextCustom.Provider value={exposed}>
      {props.children}
    </ContextCustom.Provider>
  );
};

export { ContextCustom, CustomProviderWrapper };
