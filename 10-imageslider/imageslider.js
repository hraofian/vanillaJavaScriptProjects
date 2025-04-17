let mainImage = document.getElementById("main-image");
let imageDiv = document.getElementById("image-slide-div");
console.log(mainImage.attributes.src.value);
for (let i = 0; i < imageDiv.children.length; i++) {
  imageDiv.children[i].addEventListener("click", () => {
    mainImage.attributes.src.value = imageDiv.children[i].currentSrc;
  });
}
