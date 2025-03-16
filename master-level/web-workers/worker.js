addEventListener("message", (e) => {
    console.log(e.data);
    if (e.data.length > 3) {
        postMessage("Desde el Worker...");
    }
});