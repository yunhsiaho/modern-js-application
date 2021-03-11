const uploadAvatar = (event) => {
  let avatar = document.getElementById("output");
  avatar.src = URL.createObjectURL(event.target.files[0]);
  console.log(event);
};
export { uploadAvatar };
