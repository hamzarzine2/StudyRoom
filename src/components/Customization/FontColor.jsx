import React, { useContext } from "react";
import { ContextCustom } from "../../contexts/CustomContext";
import "./Customization.css"

const FontColor = () => {

    const { getfontColor, handleFontColorChange } = useContext(ContextCustom);

    const fontColor = getfontColor();

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
