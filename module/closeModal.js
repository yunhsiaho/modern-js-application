export const closeModal  = (event)=> {
    let popUpPages = Array.from(document.getElementsByClassName("pop-up"));
    popUpPages.forEach((popUpPage)=>{
        if (event.target == popUpPage) {
            popUpPage.style.display = "none";
        }
    })
}