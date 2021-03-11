//function convert image
export const convertImages = () =>{
 
    document.querySelector("#file").addEventListener("change",(e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            image = reader.result.replace('data:', '').replace(/^.+,/, '');
        };
        reader.readAsDataURL(file)
    });
}