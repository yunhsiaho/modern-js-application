let uploadAvatar = (event)=> {
    let avatar = document.getElementById('output');
    avatar.src = URL.createObjectURL(event.target.files[0]);
}

document.querySelector(".button-create").addEventListener("click",  () =>{
    location.reload();
})

let bigModal= document.querySelector("#bigModal");
let popUpPage = document.querySelector('#popUpId');


window.onclick = ()=> {
    if (event.target == bigModal) {
        bigModal.style.display = "none";
    }else if (event.target == popUpPage) {
        popUpPage.style.display = "none";
    }
}