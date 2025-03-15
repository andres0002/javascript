// _____________Intersection Observer (Lazy Load)_________________
const divPublications = document.querySelector(".publications");
let count = 0;

const createPublication = (name, content) => {
    const container = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const coments = document.createElement("div");
    const inputComent = document.createElement("input");
    const inputSend = document.createElement("input");

    container.classList.add("publication");
    coments.classList.add("coments");
    inputComent.classList.add("coment");
    inputSend.classList.add("send");

    inputComent.setAttribute("type", "text");
    inputComent.setAttribute("placeholder", "Ingrese un comentario...");
    inputSend.setAttribute("type", "submit");

    h3.textContent = name;
    p.textContent = content;

    coments.appendChild(inputComent);
    coments.appendChild(inputSend);
    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(coments);
    
    return container;
}

const loadMorePublications = (entries) => {
    let entry = entries[0];
    if (entry.isIntersecting) loadPublications(5);
}

const observer = new IntersectionObserver(loadMorePublications);

const loadPublications = async (num) => {
    const request = await fetch("./info.txt");
    let publications = await request.json();
    publications = publications.publications;
    const fragment = document.createDocumentFragment();
    // console.log(publications);
    for (let i = 0; i < num; i++) {
        if (publications[count] != undefined) {
            let newPublication = createPublication(publications[count].name, publications[count].content);
            fragment.appendChild(newPublication);
            count++;
            if (i == (num-1)) observer.observe(newPublication);
        } else {
            if (document.querySelector(".noMore") == undefined ||
                document.querySelector(".noMore") == null ) {
                console.log(document.querySelector(".noMore"));
                let noMore = document.createElement("h3");
                noMore.classList.add("noMore");
                noMore.textContent = "No hay mas publicaciones..."
                fragment.appendChild(noMore);
            }
            break;
        }
    }
    divPublications.appendChild(fragment);
}

loadPublications(5);