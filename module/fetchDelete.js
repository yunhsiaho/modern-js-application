export const fetchDelete = async(id)=>{
    try{ 
        await fetch(`https://character-database.becode.xyz/characters/${id}`,{
            method: "DELETE",
            header : {
                "content-Type": "application/json",
            },
        });
        alert("DELETE!");
    }catch (err){
        console.error(`Unknown character whith id:${id}`);
    }
}
