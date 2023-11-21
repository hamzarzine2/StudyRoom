import React, { useContext } from "react";
import { ContextCustom } from "../../contexts/CustomContext";
import "./Customization.css"

const FontSize = () => {

    const { getFontSize, setCustomFontSize } = useContext(ContextCustom);

    const fontSize = getFontSize();

    const handleFontSizeChange = (e) => {
        setCustomFontSize(e.target.value);
      };

    return (
        <>
             <div  class="label-custom">
                <label> Font Size:</label>
            </div>
            <input type="number" min="10" max="50" value={fontSize} onChange={handleFontSizeChange} />

            <br />
        </>
    );
}

export default FontSize;
