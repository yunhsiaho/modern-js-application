export const setModal2Value = (name, shortDescription, description)=>{
    const inputNameModal2 =document.getElementById("name2");
    const inputshortDescriptionModal2 = document.getElementById("shortDescription2");
    const inputDescriptionModal2 = document.getElementById("description2");
    inputNameModal2.value = name;
    inputshortDescriptionModal2.value = shortDescription;
    inputDescriptionModal2.value = description;
}; 
