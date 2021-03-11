export const fetchEdit = async (id) => {
try {

await fetch(`https://character-database.becode.xyz/characters/${id}`, {
    method: "PUT",
    header: {
    "content-Type": "application/json",
    },
});
} catch (err) {
console.error(`Unknown character whith id:${id}`);
}
};
document.querySelector("#create-button2").addEventListener("click",function(){
    const editName = document.querySelector("#name2").value;
    console.log(editName);
});

