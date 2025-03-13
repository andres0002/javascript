// - Ejemplo de uso 2 (Combinar con Drag and Drop) -> .
const zoneArrastre = document.querySelector(".zona-arrastre");
const result = document.querySelector(".result");

zoneArrastre.addEventListener("dragover", (e) => {
    e.preventDefault();
    changeStyleEnter(e.srcElement, "#666", "#666");
})

zoneArrastre.addEventListener("dragleave", (e) => {
    changeStyleLeave(e.srcElement, "#ddd", "#222");
})

zoneArrastre.addEventListener("drop", (e) => {
    e.preventDefault();
    changeStyleLeave(e.srcElement, "#ddd", "#222");
    // loadFile(e.dataTransfer.files[0]);
    // loadFileImg(e.dataTransfer.files[0]);
    loadFileMp4(e.dataTransfer.files[0]);
})

const changeStyleEnter = (obj, colorText, colorBorder) => {
    obj.style.color = colorText;
    obj.style.border = `4px dashed ${colorBorder}`;
}

const changeStyleLeave = (obj, colorText, colorBorder) => {
    obj.style.color = colorText;
    obj.style.border = `4px dashed ${colorBorder}`;
}

const loadFile = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.addEventListener("load", (e) => {
        result.textContent = e.currentTarget.result;
    })
}

const loadFileImg = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", (e) => {
        result.style.marginTop = "0";
        let url = URL.createObjectURL(file);
        let img = document.createElement("img");
        img.setAttribute("src", url);
        img.setAttribute("class", "img");
        result.appendChild(img);
    })
}

const loadFileMp4 = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.addEventListener("load", (e) => {
        result.style.marginTop = "0";
        let video = new Blob(
            [new Uint8Array(e.currentTarget.result)],
            {type: "video/mp4"}
        );
        let url = URL.createObjectURL(video);
        let videoElementHtml = document.createElement("video");
        videoElementHtml.setAttribute("src", url);
        videoElementHtml.setAttribute("class", "video");
        result.appendChild(videoElementHtml);
        videoElementHtml.play();
        videoElementHtml.controls = true;
    })
}
