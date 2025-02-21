// __________________Get and Update Childs_______________________
const content = document.querySelector(".content");
// - firstChild -> .
const firstChild = content.firstChild;
console.log(firstChild);
// - lastChild -> .
const lastChild = content.lastChild;
console.log(lastChild);
// - firstElementChild -> .
const firstElementChild = content.firstElementChild;
console.log(firstElementChild);
// - lastElementChild -> .
const lastElementChild = content.lastElementChild;
console.log(lastElementChild);
// - childNodes -> .
const childNodes = content.childNodes;
console.log(childNodes);
// - children -> .
const children = content.children;
console.log(children);
for (child of children) {
    console.log(child);
}