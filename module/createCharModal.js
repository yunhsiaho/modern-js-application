//------------------------------add a character-------------------------------
const createCharModal = ()  => {

    // document.querySelector(".button-modal").addEventListener("click",  () =>{
 
         document.querySelector(".button-create").addEventListener("click",
         async () =>{
 
             const name = document.getElementById("name").value;
             //console.log(name);
     
             const shortDescription = document.getElementById("shortDescription").value;
             //console.log(shortDescription);
     
             const description = document.getElementById("description").value;
             //console.log(description);
 
 
         
             //const [name, shortDescription, description,id] = values;
             
         
             const response = await fetch("https://character-database.becode.xyz/characters", {
                 method: "POST",
                 headers: {
                         "Content-Type": "application/json",
                 },
                 body: JSON.stringify({
                     name: name,
                     shortDescription: shortDescription,
                     description : description,
                     image,
             
                    
                 })
             })
          })
 
     //});
 }
 export {createCharModal};