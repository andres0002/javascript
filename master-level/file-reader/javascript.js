// ________________FileReader________________
"use strict";
const file = document.getElementById("file");
const result = document.querySelector(".result");
file.addEventListener("change", (e) => {
    // console.log(e.target.files);
    readFiles(file.files);
})
// - ReadAsText() -> Para leer archivos de tipo texto.
// const readFiles = (filesP) => {
//     for (let i = 0; i < filesP.length; i++) {
//         const fileReader = new FileReader();
//         fileReader.readAsText(filesP[i]);
//         fileReader.addEventListener("load", (e) => {
//             console.log(JSON.parse(e.currentTarget.result));
//         })
//     }
// }
// - ReadAsDataURL() -> Para leer archivos de tipo (imgs, videos, etc).
const readFiles = (filesP) => {
    for (let i = 0; i < filesP.length; i++) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(filesP[i]);
        fileReader.addEventListener("load", (e) => {
            // console.log(JSON.parse(e.currentTarget.result));
            let newImg = `<img src="${e.currentTarget.result}">`;
            result.innerHTML += newImg;
        })
    }
}