import { fetchAddCharacter } from "./fetchAddCharacter.js";
import { uploadAvatar } from "./uploadAvatar.js";
let image = "";

//------------------------------add a character-------------------------------
export const modal = ()  => {
    document.getElementById("file").addEventListener("change", uploadAvatar);
    document.querySelector("#create-button").addEventListener("click", async () =>{
        const name = document.getElementById("name").value;

        const shortDescription = document.getElementById("shortDescription").value;

        const description = document.getElementById("description").value;
        
        const character = {
            name,
            shortDescription,
            description,
            image
        };
        fetchAddCharacter(character);
    });

//function convert image
document.querySelector("#file").addEventListener("change",(e) => {
    console.log("I change it!");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        image = reader.result.replace("data:", "").replace(/^.+,/, "");
    };
    reader.readAsDataURL(file);
});

};

