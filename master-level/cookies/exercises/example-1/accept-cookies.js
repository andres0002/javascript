// ______________________Cookies__________________________
const newDateUTC = days => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + parseInt(days)*1000*60*60*24);
    return fecha.toUTCString();
}
const createCookie = (name, days) => {
    let exp = newDateUTC(days);
    document.cookie = `${name};expires=${exp}`;
}
const getCookie = (cookieName) => {
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.split("=")[1];
        }
    }
    return "No hay cookies con ese name...";
}

if (getCookie("accept-cookies") !== "yes") {
    setTimeout(() => {
        document.querySelector(".bg-modal").style.zIndex = "10";
        document.querySelector(".bg-modal").style.opacity = "1";
        document.getElementById("accept").addEventListener("click", () => {
            createCookie("accept-cookies=yes", 1);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".bg-modal").style.zIndex = "-1";
            }, 1000);
        });
        document.getElementById("deny").addEventListener("click", () => {
            createCookie("accept-cookies=no", 1);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".bg-modal").style.zIndex = "-1";
            }, 1000);
        });
    }, 100);
}