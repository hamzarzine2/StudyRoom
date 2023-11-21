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

  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [backgroundImage, setBackgroundImage] = useState(defaultBackground);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#000000');


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



  socket.on("updated-background", (newBackground) => {
    console.log("updated-background : ", newBackground);
    changeBackgroundImage(newBackground)
  });

  socket.on("updated-fontfamilly", (newFontfamilly) => {
    console.log("updated-fontfamilly : ", newFontfamilly);
    changeFontFamilly(newFontfamilly)
  });

  socket.on("updated-fontsize", (newFontsize) => {
    console.log("updated-fontsize : ", newFontsize);
    changeFontSize(newFontsize)
  });

  socket.on("updated-fontcolor", (newFontcolor) => {
    console.log("updated-fontcolor : ", newFontcolor);
    changeFontColor(newFontcolor)
  });



  // Background
  const setCustomBackgroundImage = (image) => {
    setBackgroundImage(mapBackground[image]);
  }


  const handleBackgroundChange = (e) => {
    setCustomBackgroundImage(e);
  };

  const changeBackgroundImage = (background) => {
    setBackgroundImage(background);
    divRoot.style.backgroundImage = `url(${background})`;
  }

  // FontFamilly
  const setCustomFontFamily = (fontFamily) => {
    setFontFamily(fontFamily);
  };

  const handleFontFamilyChange = (e) => {
    setCustomFontFamily(e.target.value);
  };

  const changeFontFamilly = (fontfamily) => {
    setFontFamily(fontfamily);
    divRoot.style.fontFamily = `${fontfamily}`;
  };

  // FontSize
  const setCustomFontSize = (fontSize) => {
    setFontSize(fontSize);
  };

  const handleFontSizeChange = (e) => {
    setCustomFontSize(e.target.value);
  };

  const changeFontSize = (fontsize) => {
    setFontSize(fontsize);
    divRoot.style.fontSize = `${fontsize}px`;
  };


  // FontColor
  const setCustomFontColor = (fontColor) => {
    setFontColor(fontColor);
  };

  const handleFontColorChange = (e) => {
    console.log(e.target.value);
    setCustomFontColor(e.target.value);
    console.log(e.target.value);
  };

  const changeFontColor = (fontcolor) => {
    setFontColor(fontcolor);
    divRoot.style.color = `${fontcolor}`;
  };



  const handleAllChanges = () => {
    socket.emit("update-background", backgroundImage);
    changeBackgroundImage(backgroundImage)
    socket.emit("update-fontfamilly", fontFamily);
    changeFontFamilly(fontFamily);
    socket.emit("update-fontsize", fontSize);
    changeFontSize(fontSize);
    socket.emit("update-fontcolor", fontColor);
    changeFontColor(fontColor);
    
  };

  const exposed = {
    getFontSize,
    getfontFamily,
    getfontColor,
    getfontFamilyOptions,
    setCustomFontSize,
    getbackgroundOptions,
    setCustomFontColor,
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
