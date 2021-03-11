export const fetchEdit = async(id)=>{
    try{
        editName = document.querySelector("#name2").input;
        await fetch(`https://character-database.becode.xyz/characters/${id}`,{
                method: "PUT",
                header : {
                    "content-Type": "application/json",
                },                
        });
        console.log(editName);
    }catch (err){
        console.error(`Unknown character whith id:${id}`);
    } 
}