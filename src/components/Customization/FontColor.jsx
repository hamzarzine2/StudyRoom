import React, { useContext } from "react";
import { ContextCustom } from "../../contexts/CustomContext";
import "./Customization.css"

const FontColor = () => {

    const { getCustom, getfontColor, setCustom } = useContext(ContextCustom);

    const fontColor = getfontColor();
    const custom = getCustom();

    const handleFontColorChange = (e) => {
        setCustom({ ...custom, fontColor: e.target.value })
      };

    return (
        <>
              <div  class="label-custom">
                <label> Font Color:</label>
            </div>
            <input type="color" value={fontColor} onChange={handleFontColorChange} />
            <br />
        </>
    );
}

export default FontColor;
