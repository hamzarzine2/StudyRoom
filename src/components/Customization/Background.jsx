import React, { useContext } from "react";
import Button from "../Buttons/button";
import { ContextCustom } from "../../contexts/CustomContext";
import "./Customization.css"

const Background = () => {

    const { getbackgroundOptions, setCustomBackgroundImage } = useContext(ContextCustom);

    const backgroundOptions = getbackgroundOptions();

    const handleBackgroundChange = (e) => {
        setCustomBackgroundImage(e);
      };

    const renderBackgroundOptions = () => {
        return (
            <ul class="no-bullets">
                {backgroundOptions.map((key, index) => (
                    <li key={index}>
                    <Button class="btnIcon" value={<img src={key} alt={`Thumbnail ${index}`} height={50} />} event={() => handleBackgroundChange(key)} />

                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <div  class="label-custom">
                <label> Background: </label>
            </div>
            <br />
            {renderBackgroundOptions()}
            <br />
        </>
    );
}

export default Background;
