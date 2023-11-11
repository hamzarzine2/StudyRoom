import { useState } from "react";

const Customization = () => {

  const [fontFamily, setFontFamily] = useState('Arial, sans-serif');
  const [backgroundImage, setBackgroundImage] = useState('');
  const divBackground = document.getElementById("root");
  const divBody = document.querySelector("body");

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBackgroundImage(event.target.result);
        divBackground.style.backgroundImage = `url(${event.target.result})`
      };
      reader.readAsDataURL(file);

    }
  };

  divBody.style.fontFamily = `${fontFamily}`;

  return (
    <>
      <div id="divCustom">
        <h1> Customization </h1>
        
        <label>
          Image de fond:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <br />
        <label>
          Police:
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            {/* Ajoutez d'autres options de police selon vos besoins */}
          </select>
        </label>
      </div>
    </>
  );
}

export default Customization;
