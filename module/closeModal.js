export const closeModal =window.onclick = (event)=> {
    let popUpPages = Array.from(document.getElementsByClassName("pop-up"));
    popUpPages.forEach((popUpPage)=>{
        if (event.target == popUpPage) {
            popUpPage.style.display = "none";
        }
    })
}