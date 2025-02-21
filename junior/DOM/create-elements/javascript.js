// ___________________Create Elements___________________
// - createElements() -> .
const content = document.querySelector(".content");
// for (let i = 0; i < 10; i++) {
//     const item = document.createElement("li");
//     console.log(item);
//     // - createTextNode() -> .
//     const textItem = document.createTextNode("Texto Test....");
//     console.log(textItem);
//     // - appendChild() -> .
//     item.appendChild(textItem);
//     console.log(item);
//     content.appendChild(item);
//     console.log(content);
// }
// - createDocumentFragment() -> .
const fragment = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
    const item = document.createElement("li");
    console.log(item);
    // - createTextNode() -> .
    const textItem = document.createTextNode("Texto Test....");
    console.log(textItem);
    // - appendChild() -> .
    item.appendChild(textItem);
    console.log(item);
    fragment.appendChild(item);
}
console.log(fragment);
content.appendChild(fragment);
console.log(content);