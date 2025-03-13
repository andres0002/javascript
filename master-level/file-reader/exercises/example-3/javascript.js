// - Ejemplo de uso 3 (Barra de progreso con progress and loadend) -> .
const zoneArrastre = document.querySelector(".zona-arrastre");
const result = document.querySelector(".result");
const barLoad = document.querySelector(".barra-de-carga");

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

const loadFileMp4 = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.addEventListener("progress", (e) => {
        let load = Math.round(e.loaded / file.size * 100);
        zoneArrastre.textContent = `${load}%`;
        zoneArrastre.style.color = "#444";
        zoneArrastre.style.border = "none";
        barLoad.style.width = `${load/1.2}%`;
        barLoad.style.padding = `65px 20px`;
        barLoad.style.left = `8px`;
        barLoad.style.right = `8px`;
    })
    fileReader.addEventListener("loadend", () => {
        setTimeout(() => {
            zoneArrastre.animation = "aparecer 1s forwards";
            zoneArrastre.textContent = "!Carga Completa¡";
            zoneArrastre.style.fontSize = "30px";
        }, 0.5);
    })
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
