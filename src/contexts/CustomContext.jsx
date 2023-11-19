import React, { useState, useContext } from "react";
import { SocketContext } from "./SocketContext";
import background from "../assets/background.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";

const ContextCustom = React.createContext(null);


const CustomProviderWrapper = (props) => {

  const divRoot = document.getElementById("root");
const defaultBackground = window.getComputedStyle(divRoot).backgroundImage;
  // const { socket } = useContext(SocketContext);
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [backgroundImage, setBackgroundImage] = useState(defaultBackground);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#0000FF');

  /** 
  const [custom, setCustom] = useState({
    backgroundImage: defaultBackground,
    fontSize: 16,
    fontColor: "#000000",
    fontFamily: "Arial, sans-serif"
  });
*/
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

  const getfontFamily = () => fontFamily;

  const getFontSize = () => fontSize;

  const getfontColor = () => fontColor;


  const getfontFamilyOptions = () => fontFamilyOptions;

  const getbackgroundOptions = () => backgroundOptions;

  const getMapBackground = () => mapBackground;

  
  const setCustomFontFamily = (fontFamily) => {
    setFontFamily(fontFamily);
  };

  const setCustomFontSize = (fontSize) => {
    setFontSize(fontSize);
  };

  const setCustomFontColor = (fontColor) => {
    setFontColor(fontColor);
  };


  const changeBackgroundImage = (image) => {
    setBackgroundImage(mapBackground[image]);
  }


  const handleAllChanges = () => {
    divRoot.style.backgroundImage = `url(${backgroundImage})`;
    divRoot.style.fontFamily = `${fontFamily}`;
    divRoot.style.fontSize = `${fontSize}px`;
    divRoot.style.color = `${fontColor}`;
  };

  const exposed = {
    getFontSize,
    getfontFamily,
    getfontColor,

    getfontFamilyOptions,
    getMapBackground,
    getbackgroundOptions,
    setCustomFontSize,
    setCustomFontFamily,
    setCustomFontColor,
    changeBackgroundImage,
    handleAllChanges
  };

  return (
    <ContextCustom.Provider value={exposed}>
      {props.children}
    </ContextCustom.Provider>
  );
};

export { ContextCustom, CustomProviderWrapper };
