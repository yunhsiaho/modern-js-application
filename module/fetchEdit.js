export const fetchEdit = async (id) => {
  try {
    // const editName = document.querySelector("#name2").value;
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
// console.log(editName);
