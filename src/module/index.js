//nom de la const API est tjrs response
//const response = "https://character-database.becode.xyz/characters"

import {createCharModal} from "./module/createCharModal.js";
import {convertImages} from "./module/convertImages.js";

const tpl = document.querySelector("#tpl") ;
const target = document.querySelector("#target");
let idArray = [];
let image = "";

document.querySelector(".btn").addEventListener("click", async () =>{
    

    const response = await fetch("https://character-database.becode.xyz/characters");
    const character = await response.json();

    //console.log(character);

    character.forEach(({name, shortDescription, image, description, id}) => { 

        const clone = tpl.cloneNode(true).content; // image du template clone du template

        clone.querySelector(".card-name").innerHTML = name;
        clone.querySelector(".card-img").setAttribute("src", "data:image/png;base64," +image);
        clone.querySelector(".card-shortDescription").innerHTML = shortDescription;
        clone.querySelector(".card-description").innerHTML = description;
        
        

        target.appendChild(clone);

        
       
        idArray.push(id);
        //console.log(idArray)

        

        //---------------------delete a character---------------------------
        
        
        Array.from(document.querySelectorAll(".button-delete")).forEach((btn, i) => { // tableau des button /!\ pour que tout les btn soient actif
            
            btn.addEventListener("click", async () =>{

                const id = idArray[i];
                //console.log(id);
                
                        
                try{ 
                    const delreponse = await fetch(`https://character-database.becode.xyz/characters/${id}`,{
                        method: "DELETE",
                        header : {
                            "content-Type": "application/json",
                        },
                    });
            
                        const character = await response.json();
                    
                
                }catch (err){
                    console.error(`Unknown character whith id:${id}`);
                } 
            }) 
                    
        }); 
        
        //------------------------edit a character--------------------------
        Array.from(document.querySelectorAll(".button-edit")).forEach((btn, i) => {

            btn.addEventListener("click", async () =>{

                const id = idArray[i];

                //console.log("button edit-test");

                //ouvrir un modal
                
                document.querySelector("#popUpId").style.display = "flex";// à modifier
            
                

                try{
                    const editreponse = await fetch(`https://character-database.becode.xyz/characters/${id}`,{
                            method: "PUT",
                            header : {
                                "content-Type": "application/json",
                            },
                    });

                    const character = await response.json();

                
                }catch (err){
                    console.error(`Unknown character whith id:${id}`);
                } 
                
             
               
            })
            
        });
        
    });
        

});






