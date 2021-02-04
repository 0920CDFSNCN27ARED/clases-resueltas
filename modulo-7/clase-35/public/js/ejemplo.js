window.addEventListener("load", () => {
    const welcome = document.getElementById("welcome");

    welcome.innerHTML = `Hola <span id="pepito">mundo</span>`;

    const span = document.getElementById("pepito");

    console.log("hola");
    alert("Estoy molestandote");

    console.log(span);
});
