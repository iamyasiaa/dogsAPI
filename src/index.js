import axios from "axios";
import "./style.scss";

async function getDogs() {
  try {
    const ROOT_BODY = document.getElementById("body");
    const divGrid = document.createElement("div");
    const response = await axios.get(
      "https://dog.ceo/api/breeds/image/random/10"
    );
    console.log(response.data);
    const arrayDogs = response.data.message.map((item) => {
      const image = document.createElement("img");
      image.src = item;
      image.className = "image";
      return image;
    });
    divGrid.className = "imageDods";
    divGrid.append(...arrayDogs);
    ROOT_BODY.appendChild(divGrid);
  } catch (error) {
    throw new Error(error);
  }
}

getDogs();
