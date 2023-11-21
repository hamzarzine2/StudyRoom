import React, { useState, useContext,useEffect } from "react";
import { SocketContext } from "./SocketContext";
import background from "../assets/background.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import { useLocalStorage, fetchValue, persistValue } from "../hooks/utils";

const ContextCustom = React.createContext(null);
const STORAGE_CUSTOM_KEY = "custom";

const CustomProviderWrapper = (props) => {

  const divRoot = document.getElementById("root");
  const defaultBackground = window.getComputedStyle(divRoot).backgroundImage;

  const { socket, updateCustom } = useContext(SocketContext);


  const [custom, setCustom] = useState(() => {
    return fetchValue(STORAGE_CUSTOM_KEY, {
      backgroundImage: defaultBackground,
      fontFamily: 'Arial, sans-serif',
      fontSize: 16,
      fontColor: '#000000',
    });
  });

  useEffect(() => {
    console.log(2);
    const arrayCustom = fetchValue(STORAGE_CUSTOM_KEY, {
      backgroundImage: defaultBackground,
      fontFamily: 'Arial, sans-serif',
      fontSize: 16,
      fontColor: '#000000',
    });
    setCustom(arrayCustom);
  }, [defaultBackground]);

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
    console.log(4);
    changeAllCustoms(updatedCustom);
 
    console.log("updated-custom : ", updatedCustom);

  });


  socket.on("get-custom", (socketId) => {
    console.log(5);
    socket.emit("return-custom", custom, socketId);
  });


  // Background
  const setCustomBackgroundImage = (image) => {
    setCustom({ ...custom, backgroundImage: mapBackground[image] })
  }

  // FontFamilly
  const setCustomFontFamily = (fontFamily) => {
    setCustom({ ...custom, fontFamily: fontFamily })
  };


  // FontSize
  const setCustomFontSize = (fontSize) => {
    setCustom({ ...custom, fontSize: fontSize })
  };


  // FontColor
  const setCustomFontColor = (fontColor) => {
    setCustom({ ...custom, fontColor: fontColor });
  };


  const changeAllCustoms = (custom) => {
    console.log(6);
    setCustomBackgroundImage(custom.backgroundImage);
    divRoot.style.backgroundImage = `url(${custom.backgroundImage})`;

    setCustomFontFamily(custom.fontFamily);
    divRoot.style.fontSize = `${custom.fontFamily}px`;

    setCustomFontSize(custom.fontSize);
    divRoot.style.fontSize = `${custom.fontSize}px`;

    setCustomFontColor(custom.fontColor);
    divRoot.style.color = `${custom.fontColor}`;
  }

  
  const handleAllChanges = () => {
    console.log(7);
    const updatedCustom =
    {
      backgroundImage: custom.backgroundImage,
      fontFamily: custom.fontFamily,
      fontSize: custom.fontSize,
      fontColor: custom.fontColor,
    };

    setCustom(updatedCustom);
    changeAllCustoms(updatedCustom);
    persistValue(STORAGE_CUSTOM_KEY, custom);
  };





  const exposed = {
    getFontSize,
    setCustom,
    getfontFamily,
    getfontColor,
    getfontFamilyOptions,
    getbackgroundOptions,
    handleAllChanges,
    setCustomBackgroundImage,
    setCustomFontFamily,
    setCustomFontSize,
    setCustomFontColor,
    changeAllCustoms,
    setCustom
  };

  return (
    <ContextCustom.Provider value={exposed}>
      {props.children}
    </ContextCustom.Provider>
  );
};

export { ContextCustom, CustomProviderWrapper };
