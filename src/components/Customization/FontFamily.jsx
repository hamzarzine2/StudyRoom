import React, { useContext } from "react";
import { ContextCustom } from "../../contexts/CustomContext";
import "./Customization.css"

const FontFamily = () => {

    const { getCustom, getfontFamily, getfontFamilyOptions, setCustom } = useContext(ContextCustom);

    const fontFamily = getfontFamily();
    const custom = getCustom();

    const handleFontFamilyChange = (e) => {
        setCustom({ ...custom, fontFamily: e.target.value })
    };

    return (
        <>
            <div class="label-custom">
                <label> Font Family:</label>
            </div>
            <select value={fontFamily} onChange={handleFontFamilyChange}>
                {getfontFamilyOptions().map((option, index) => (
                    <option key={index} value={option}>
                        {option.split(",")[0]} {/* Affiche seulement le nom de la police sans les alternatives */}
                    </option>
                ))}
            </select>
        </>
    );
}

export default FontFamily;
