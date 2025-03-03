// __________Fetch y Axios con Await y Async_________
// - Implementación -> .
const vName = document.querySelector(".name");
const age = document.querySelector(".age");

// Fetch
// const getName = async () => {
//     let request = await fetch("./info.txt");
//     let result = await request.json();
//     vName.innerHTML = `
//         Name: <strong>${result.name}</strong>.
//     `;
//     vName.style.padding = "20px";
//     console.log(result.name);
// }

// const getAge = async () => {
//     let request = await fetch("./info.txt");
//     let result = await request.json();
//     age.innerHTML = `
//         Age: <strong>${result.age}</strong>.
//     `;
//     age.style.padding = "20px";
//     console.log(result.age);
// }

// Axios
const getName = async () => {
    let response = await axios.get("./info.txt");
    vName.innerHTML = `
        Name: <strong>${response.data.name}</strong>.
    `;
    vName.style.padding = "20px";
    console.log(response.data.name);
}

const getAge = async () => {
    let response = await axios.get("./info.txt");
    age.innerHTML = `
        Age: <strong>${response.data.age}</strong>.
    `;
    age.style.padding = "20px";
    console.log(response.data.age);
}

document.getElementById("btnName").addEventListener("click", getName);
document.getElementById("btnAge").addEventListener("click", getAge);