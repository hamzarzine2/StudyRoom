import React, { useContext } from "react";
import Button from "../Buttons/button";
import { ContextCustom } from "../../contexts/CustomContext";
import "./Customization.css"
import Background from "./Background";
import FontFamily from "./FontFamily";
import FontSize from "./FontSize";
import FontColor from "./FontColor";

const Customization = () => {

  const { handleAllChanges } = useContext(ContextCustom);
  const useTheContext = () => handleAllChanges();
  return (
    <>
      <div id="divCustom">

        <div class="label-custom-title">
          <label> Customization </label> 
        </div>
        <br />
        <Background />
        <FontFamily />
        <br />
        <FontSize />
        <br />
        <FontColor />
        <Button event={useTheContext} value={"Save"} class="saveButton" />
      </div>
    </>
  );
}

export default Customization;
