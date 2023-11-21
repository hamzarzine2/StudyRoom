import React, { useState, useContext } from "react";
import { SocketContext } from "./SocketContext";
import background from "../assets/background.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";

const ContextCustom = React.createContext(null);


const CustomProviderWrapper = (props) => {

  const divRoot = document.getElementById("root");
  const defaultBackground = window.getComputedStyle(divRoot).backgroundImage;

  const { socket } = useContext(SocketContext);

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

  const getfontFamily = () => custom.fontFamily;
  const getFontSize = () => custom.fontSize;
  const getfontColor = () => custom.fontColor;
  const getfontFamilyOptions = () => fontFamilyOptions;
  const getbackgroundOptions = () => backgroundOptions;


  socket.on("updated-custom", (updatedCustom) => {
    console.log("updated-custom : ", updatedCustom);
    changeBackgroundImage(updatedCustom.backgroundImage)
    changeFontFamilly(updatedCustom.fontFamily)
    changeFontSize(updatedCustom.fontSize)
    changeFontColor(updatedCustom.fontColor)
  });

  // Background
  const setCustomBackgroundImage = (image) => {
    setCustom({ ...custom, backgroundImage: mapBackground[image] })
  }


  const handleBackgroundChange = (e) => {
    setCustomBackgroundImage(e);
  };

  const changeBackgroundImage = (background) => {
    setCustomBackgroundImage(background);
    divRoot.style.backgroundImage = `url(${background})`;
  }


  // FontFamilly
  const setCustomFontFamily = (fontFamily) => {
    setCustom({ ...custom, fontFamily: fontFamily })
  };

  const handleFontFamilyChange = (e) => {
    setCustomFontFamily(e.target.value);
  };

  const changeFontFamilly = (fontfamily) => {
    setCustomFontFamily(fontfamily);
    divRoot.style.fontFamily = `${fontfamily}`;
  };


  // FontSize
  const setCustomFontSize = (fontSize) => {
    setCustom({ ...custom, fontSize: fontSize })
  };

  const handleFontSizeChange = (e) => {
    setCustomFontSize(e.target.value);
  };

  const changeFontSize = (fontsize) => {
    setCustomFontSize(fontsize);
    divRoot.style.fontSize = `${fontsize}px`;
  };


  // FontColor
  const setCustomFontColor = (fontColor) => {
    setCustom({ ...custom, fontColor: fontColor });
  };

  const handleFontColorChange = (e) => {
    console.log(e.target.value);
    setCustomFontColor(e.target.value);
    console.log(e.target.value);
  };

  const changeFontColor = (fontcolor) => {
    setCustomFontColor(fontcolor);
    divRoot.style.color = `${fontcolor}`;
  };



  const handleAllChanges = () => {
    const updatedCustom =
    {
      backgroundImage: custom.backgroundImage,
      fontFamily: custom.fontFamily,
      fontSize: custom.fontSize,
      fontColor: custom.fontColor,
    };

    setCustom(updatedCustom);
    socket.emit("update-custom", updatedCustom);
    changeBackgroundImage(updatedCustom.backgroundImage);
    changeFontFamilly(updatedCustom.fontFamily);
    changeFontSize(updatedCustom.fontSize);
    changeFontColor(updatedCustom.fontColor);
    
  };

  const exposed = {
    getFontSize,
    getfontFamily,
    getfontColor,
    getfontFamilyOptions,
    getbackgroundOptions,
    handleAllChanges,
    handleBackgroundChange,
    handleFontFamilyChange,
    handleFontSizeChange,
    handleFontColorChange,
  };

  return (
    <ContextCustom.Provider value={exposed}>
      {props.children}
    </ContextCustom.Provider>
  );
};

export { ContextCustom, CustomProviderWrapper };
