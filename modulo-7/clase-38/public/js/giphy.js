// const url =
// "https://api.giphy.com/v1/gifs/random?api_key=CNiRVOVw47tBdejvxdL625WLIT49xAL6&tag=&rating=g";

const search =
    "https://api.giphy.com/v1/gifs/search?api_key=CNiRVOVw47tBdejvxdL625WLIT49xAL6&limit=25&offset=0&rating=g&lang=en";

// <i class="fas fa-star"></i>
// <i class="far fa-star"></i>
const favoritesJSON = localStorage.getItem("favorites");
const favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];

window.addEventListener("load", async () => {
    const form = document.getElementById("searchForm");
    const container = document.getElementById("gifContainer");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const input = document.getElementById("search");

        const completeUrl = search + `&q=${input.value}`;

        const response = await fetch(completeUrl);
        const gifData = await response.json();
        const gifs = gifData.data;

        container.innerHTML = "";

        for (let i = 0; i < gifs.length; i++) {
            const gif = gifs[i];
            const id = gif.id;
            const title = gif.title;
            const imageURL = gif.images.original.url;
            const div = buildImageCard(id, title, imageURL);
            container.appendChild(div);
        }
    });
});

function buildImageCard(id, title, imageURL) {
    const div = document.createElement("div");
    div.classList.add("col-2");

    const img = document.createElement("img");
    img.classList.add("w-100");
    img.src = imageURL;

    const btn = document.createElement("button");
    btn.innerText = "Favorite!";
    btn.addEventListener("click", () => {
        if (!favorites.includes(id)) {
            favorites.push(id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            //REMOVER EL ID del array y guardarlo en el storage
        }
    });

    const imageTitle = document.createElement("h2");
    imageTitle.innerText = title;

    div.appendChild(img);
    div.appendChild(imageTitle);
    div.appendChild(btn);

    return div;
}
