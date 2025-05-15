// - Ejemplo de uso 1 (Carga galería dinámica) -> .
const inputFile = document.getElementById("inputFile");
const result = document.querySelector(".result");
inputFile.addEventListener("change", (e) => {
    readFiles(e.target.files);
    // readFiles(inputFile.files);
})

const readFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
        const filesReader = new FileReader();
        filesReader.readAsDataURL(files[i]);
        filesReader.addEventListener("load", (e) => {
            let newImg = `<img src="${e.currentTarget.result}">`;
            result.innerHTML += newImg;
        })
    }
}