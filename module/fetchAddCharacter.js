export const fetchAddCharacter = async (character) => {
try {
console.log(character);
const response = await fetch(
    "https://character-database.becode.xyz/characters",
    {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(character),
    }
);
const data = await response.json();
console.log(data);
} catch (error) {
console.error(error);
}
};
