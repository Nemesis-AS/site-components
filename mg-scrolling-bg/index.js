function main() {
    preloadImagesFromElements();

    const root = document.getElementById("scrollBG");
    document.querySelectorAll("span[data-img]").forEach(el => {
        el.addEventListener("mouseover", e => {
            // console.log("Hover");
            const bgURL = `url(${el.dataset.img})`;

            if (root.style.backgroundImage != bgURL)
                root.style.backgroundImage = bgURL;
        });
    });
}

function preloadImagesFromElements() {
    const imgDiv = document.createElement("div");
    imgDiv.style.display = "none";

    document.querySelectorAll("span[data-img]").forEach(el => {
        const img = document.createElement("img");
        img.src = el.dataset.img;
        imgDiv.appendChild(img);
    });

    document.body.appendChild(imgDiv);
}

window.onload = main;