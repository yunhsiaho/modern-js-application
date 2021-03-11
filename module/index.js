//nom de la const API est tjrs response
//const response = "https://character-database.becode.xyz/characters"

import { modal } from "./modal.js";
import { fetchDelete } from "./fetchDelete.js";
import { fetchEdit } from "./fetchEdit.js";
import { setModal2Value } from "./modal2Value.js";
import { closeModal } from "./closeModal.js";

const tpl = document.querySelector("#tpl");
const target = document.querySelector("#target");
let idArray = [];

document.querySelector(".btn").addEventListener("click", async () => {
const response = await fetch(
"https://character-database.becode.xyz/characters"
);
const characters = await response.json();

characters.forEach(
({ name, shortDescription, image, description, id }, index) => {
    const clone = tpl.cloneNode(true).content; // image du template clone du template
    clone.querySelector(".card-name").innerHTML = name;
    clone
    .querySelector(".card-img")
    .setAttribute("src", "data:image/png;base64," + image);
    clone.querySelector(
    ".card-shortDescription"
    ).innerHTML = shortDescription;
    clone.querySelector(".card-description").innerHTML = description;
    const buttonEdit = clone.querySelector(".button-edit");
    buttonEdit.setAttribute("id", `button-${index}`);
    target.appendChild(clone);
    idArray.push(id);

    //---------------------delete a character---------------------------
    Array.from(document.querySelectorAll(".button-delete")).forEach(
        (btn, i) => {
          // tableau des button /!\ pour que tout les btn soient actif

        btn.addEventListener("click", async () => {
            const id = idArray[i];
            fetchDelete(id);
        });
        }
    );

      //------------------------edit a character--------------------------

    buttonEdit.addEventListener("click", () => {
        // const id = idArray[i];
        //ouvrir un modal
        setModal2Value(name, shortDescription, description);
        console.log(name);
        fetchEdit(id);
    });
    });
});
document.querySelector("#openModalButton").addEventListener("click", modal());

closeModal;

// function component() {
//   const element = document.createElement("div");

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join([""], " ");

//   return element;
// }

// document.body.appendChild(component());