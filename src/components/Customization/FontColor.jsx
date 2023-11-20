import React, { useContext } from "react";
import { ContextCustom } from "../../contexts/CustomContext";
import "./Customization.css"

const FontColor = () => {

    const { getfontColor, setCustomFontColor } = useContext(ContextCustom);

    const fontColor = getfontColor();

    const handleFontColorChange = (e) => {
        console.log(e.target.value);
        setCustomFontColor(e.target.value);
        console.log(e.target.value);
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
