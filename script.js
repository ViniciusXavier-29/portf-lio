function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")){
        img.setAttribute("src", "perfil.jpeg");
    } else {
        img.setAttribute("src", "perfil2.jpeg");
    }
}